import React from 'react';
import { Avatar, Space, Statistic, Row } from 'antd';

const MyTeam_Profile = (props) => {
  
  const patrimonio = props.props.historical[props.props.historical.length-1].patrimonio
  const timeValor = props.teamValue
  return (
    <div style={{marginBottom: '10px'}}>
    <Row  style={{marginBottom: '10px'}}>
      <Space size={"middle"}>
        <Avatar size={64} src={`${props.props.profile.url_escudo_svg}`} />
        <div className="avatar-name">{props.props.profile.nome}</div>
      </Space>
    </Row>
    <Row>
      <Space size="large" align="center">
        <Statistic 
        title="Total Patrimonio"
        prefix="$"
        value={patrimonio}
        />
        <Statistic 
        title="Valor do Time"
        prefix="$"
        value={timeValor}
        />
        <Statistic 
        title="Cartoletas"
        prefix="$"
        value={(patrimonio - timeValor).toFixed(2)}
        />
      </Space>
    </Row>
    </div>
  )
}

export default MyTeam_Profile
