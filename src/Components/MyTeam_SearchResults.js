import React from 'react'
import { List, Avatar, Button, Divider } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';

const MyTeam_SearchResults = (props) => {
  console.log(props)

  // create titles dynamically
  const data = props.props.map(result=>{
    return {
      title: result.nome,
      time_id: result.time_id,
      url_escudo_svg: result.url_escudo_svg,
      nome_cartola: result.nome_cartola,
    }
  })

  return (
    <div>
      <Divider orientation="left">Resultados</Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
          actions={[
            <Button 
              type="primary" 
              shape="round" 
              icon={<BarChartOutlined />}
              >Analizar</Button>
            ]}>
            <List.Item.Meta
              avatar={<Avatar src={item.url_escudo_svg} />}
              title={item.title}
              description={item.nome_cartola}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default MyTeam_SearchResults
