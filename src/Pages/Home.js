import React from 'react'
import { Row, Col, Button, AutoComplete } from 'antd';

const Home = () => {

  const style = {
    padding: '30px',
  }

  const col_center = {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
  }

  return (
    <div>
    <Row style={style}>
      <Col span={8} style={{margin: "0 auto"}}>
        <Button type="primary" style={col_center}> Hello, World! </Button>
      </Col>
      <Col span={8} >
        <Button style={col_center}> Hello, World! </Button>
      </Col>
      <Col span={8}>
        <Button type="dashed" style={col_center}> Hello, World! </Button>
      </Col>
    </Row>
    </div>
  )
}

export default Home
