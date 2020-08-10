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
console.log(`https://api.cartolafc.globo.com/time/id/${teamId}`)
fetch(`https://api.cartolafc.globo.com/time/id/${teamId}`, 
  {
    method: 'GET',
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept':  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      
    }
  })
  .then(
    (response)=>response.json()
  )
  .then(
    (result) => {
      var teamData = result
      console.log(teamData)
      // teamData["atletas"].forEach((player)=>{
      //   // Instantiate object, fill it, push it
      //   const newData = {};
      //   newData['key'] = data.length + 1
      //   newData['name'] = player['apelido']
      //   newData['value'] = player['preco_num']
      //   newData['position']=teamData['posicoes'][player['posicao_id']]['nome']

      //   data.push(newData)
      // })
      // setState({...state, isLoading: false})
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
