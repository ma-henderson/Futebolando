import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import PlayersTable from './Pages/PlayersTable';
import MyTeam from './Pages/MyTeam';
import MyTeam_Search from './Components/MyTeam_Search.js';

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
            <Menu.Item key="2"><Link to="/buscar">Buscar</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/MeuTime">Meu time</Link></Menu.Item>

          </Menu>
        </Header>


        <Content style={{ padding: '0 50px'}}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>PlayersTable</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-content">
          
          <Switch>
            <Route path="/MeuTime">
              <MyTeam />
            </Route>
            <Route path="/buscar">
              <MyTeam_Search />
            </Route>
            <Route path="/">
              <PlayersTable />
            </Route>
         </Switch>
         
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Design Library by Ant Design - Developed by  
           <a href="https://github.com/ma-henderson/Futebolando" style={{fontWeight: 'bold'}}> ma-henderson</a>
        </Footer>

      </Layout>
    </div>
    </Router>
  );
}

export default App;
