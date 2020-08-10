import React, { useState } from 'react'
import { Table } from 'antd';

const MyTeam = () => {
  const [state, setState] = useState({
    isLoading: true
  })

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Posição',
    dataIndex: 'position',
    key: 'position',
  },

];
var data = [];
const teamId = 4829739

fetch(`https://api.cartolafc.globo.com/time/id/${teamId}`, 
  {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'https://cartolafc.globo.com'
    }
  })
  .then(
    (result, err) => {
      if (err) {console.log(err)}
      var teamData = result
      teamData["atletas"].forEach((player)=>{
        // Instantiate object, fill it, push it
        const newData = {};
        newData['key'] = data.length + 1
        newData['name'] = player['apelido']
        newData['value'] = player['preco_num']
        newData['position']=teamData['posicoes'][player['posicao_id']]['nome']

        data.push(newData)
      })
      console.log(teamData)
      setState({...state, isLoading: false})
    }
  )

  if (state.isLoading) {
    return (
      <div> Loading . . . </div>
      )}
    else {
      return (
        <div>
        <Table columns={columns} dataSource={data} />
      </div>
      )
    }

};
export default MyTeam
