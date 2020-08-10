import React from 'react';
import './App.css';
import PlayersTable from './Pages/PlayersTable';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className="layout">

        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
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
  );
}

export default App;
