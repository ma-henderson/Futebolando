import React from 'react'
  
import { Table, Space } from 'antd';

var mercado = require('../Data/mercado1.json');


const Players = () => {

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
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
    newData['value'] = player['preco_num']
    newData['position']=mercado['posicoes'][player['posicao_id']]['nome']

    data.push(newData)
  }
})
  
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Players
