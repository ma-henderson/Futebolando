import React, { useState, useEffect } from 'react'
import { Table, Button, Space } from 'antd';
import MyTeam_Profile from '../Components/MyTeam_Profile';

const MyTeam = () => {
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
    isLoading: true,
    isFetching: false,
    data: [],
    team_value: null
  })

  const handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    // console.log(state.data)
    setState({
      ...state,
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  
  const clearFilters = () => {
    setState({
      ...state, filteredInfo: null });
  };

  const clearAll = () => {
    setState({
      ...state,
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  const setPriceSort = () => {
    setState({
      ...state,
      sortedInfo: {
        order: 'descend',
        columnKey: 'value',
      },
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  var position_table = {
    1: {nome: "Goleiro", short: "gol" },
    2: {nome: "Lateral", short: "lat" },
    3: {nome: "Zagueiro", short: "zag" },
    4: {nome: "Meia", short: "mei" },
    5: {nome: "Atacante", short: "ata" },
    6: {nome: "Técnico", short: "tec" }
  }

  const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
    sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    ellipsis: false,
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
    sorter: (a, b) => a.value - b.value,
    sortOrder: sortedInfo.columnKey === 'value' && sortedInfo.order,
    ellipsis: false,
  },
  {
    title: 'Valorizacao',
    dataIndex: 'variacao_num',
    key: 'variacao_num',
    sorter: (a, b) => a.variacao_num - b.variacao_num,
    sortOrder: sortedInfo.columnKey === 'variacao_num' && sortedInfo.order,
    ellipsis: false,
    render(text, record) {
      const pontos_color = record.variacao_num > 0 ?
      "green" : 
      record.variacao_num == 0 ?
      "inherit" : "red"
      return {
        props: {
          style: { color: pontos_color },
        },
        children: <div>{text}</div>
      }
    }
  },
  {
    title: 'Pontos',
    dataIndex: 'pontos_num',
    key: 'pontos_num',
    sorter: (a, b) => a.pontos_num - b.pontos_num,
    sortOrder: sortedInfo.columnKey === 'pontos_num' && sortedInfo.order,
    ellipsis: false,
    render(text, record) {
      const pontos_color = record.pontos_num > 0 ?
      "green" : 
      record.pontos_num == 0 ?
      "inherit" : "red"
      return {
        props: {
          style: { color: pontos_color, fontWeight: "bold" },
        },
        children: <div>{text}</div>
      }
    }
  },
  {
    title: 'Posição',
    dataIndex: 'position',
    key: 'position',
    filters: [      
    { text: "Goleiro", value: "Goleiro" },
    { text: "Lateral", value: "Lateral" },
    { text: "Zagueiro", value: "Zagueiro" },
    { text: "Meia", value: "Meia" },
    { text: "Atacante", value: "Atacante" },
    { text: "Técnico", value: "Técnico" }
  ],
    filteredValue: filteredInfo.position || null,
    onFilter: (value, record) => record.position.includes(value),
    // sorts by postion in field, not by alphabetical order
    sorter: (a, b) => a.posicao_id > b.posicao_id ? 1 : -1,
    sortOrder: sortedInfo.columnKey === 'position' && sortedInfo.order,
    ellipsis: true,
  },
];

  var teamId =  15025293
  useEffect(()=>{
    if (state.isLoading && !state.isFetching) {
      state.isFetching = true;
      fetch(`http://localhost:3020/time/check`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({time_id: teamId})
      })
      .then(
        (response)=>response.json()
      )
      .then(
        (result) => {
          state.profileData = result
          let totalValue = 0

          result.atletas.forEach((player)=>{
            // Instantiate object, fill it, push it
            const resData = {};
            resData.key = state.data.length + 1
            resData.name = player.apelido
            resData.value = player.preco_num.toFixed(2)
            resData.position = position_table[player.posicao_id].nome
            resData.posicao_id = player.posicao_id
            resData.pontos_num = player.pontos_num.toFixed(2)
            resData.variacao_num = player.variacao_num.toFixed(2)
            
            totalValue += player.preco_num

            state.data.push(resData)
            if (state.data.length === result.atletas.length) {
              state.team_value = totalValue.toFixed(2);
              setState({...state, isLoading: false})
              console.log(state)
            }      
          })

          
        });
    }
  });
  
  return(
    <div>
      
        {!state.isLoading &&
          <div>
          <MyTeam_Profile props={state.profileData} teamValue={state.team_value}/>
          <Space style={{ marginBottom: 16 }}>
            <Button onClick={setPriceSort}>Sort Price</Button>
            <Button onClick={clearFilters}>Clear filters</Button>
            <Button onClick={clearAll}>Clear filters and sorters</Button>
          </Space>
          <Table 
            columns={columns}
            onChange={handleChange}
            dataSource={state.data}
            pagination={{defaultPageSize: 20, hideOnSinglePage: true}} />
          </div> 
          }
       
    </div>
  )

};
export default MyTeam
