import React, {useState} from 'react'
import { Table, Button, Space } from 'antd';

var mercado = require('../Data/mercado1.json');


const Players = () => {

  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
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
        columnKey: 'price',
      },
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
      sorter: (a, b) => a.name - b.name,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Valor',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
      ellipsis: true,
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
      sorter: (a, b) => a.position.length - b.position.length,
      sortOrder: sortedInfo.columnKey === 'position' && sortedInfo.order,
      ellipsis: true,
    },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];
// console.log(mercado["posicoes"])

  const data = [];
  mercado["atletas"].forEach((player, index)=>{
    if (player["jogos_num"] > 0) {
      // Instantiate object, fill it, push it
      const newData = {};
      newData['key'] = data.length + 1
      newData['name'] = player['apelido']
      newData['price'] = player['preco_num']
      newData['position']=mercado['posicoes'][player['posicao_id']]['nome']

      data.push(newData)
    }
  })
    
  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setPriceSort}>Sort Price</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default Players


// ----------------###----------- ----#--------------#### -----------

