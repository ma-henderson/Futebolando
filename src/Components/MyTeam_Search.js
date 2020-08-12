import React from 'react'
import { Input } from 'antd';
const { Search } = Input;
const MyTeam_Search = () => {
  return (
    <div>
    <Search
      placeholder="Busque seu time"
      enterButton="Buscar"
      size="large"
      onSearch={value => console.log(value)}
    />
    </div>
  )
}

export default MyTeam_Search
