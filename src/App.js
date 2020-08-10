import React from 'react';
import './App.css';
import PlayersTable from './Pages/PlayersTable';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Router>
    <div className="App">
      <Layout className="layout">

        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Mercado</Link></Menu.Item>
            <Menu.Item key="2">Seu time</Menu.Item>
            <Menu.Item key="3">Update</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>PlayersTable</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <PlayersTable />
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Design Library by Ant Design - Developed by ma-henderson</Footer>

      </Layout>,
    </div>
    </Router>
  );
}

export default App;
