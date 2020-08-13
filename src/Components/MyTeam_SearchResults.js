import React, {useState, useContext} from 'react';
import AppContext from '../AppContext';
import { List, Avatar, Button, Divider } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";

const MyTeam_SearchResults = (props) => {
  const [state, setState] = useState({
    isLoading: false,
    redirect: undefined
  })

  const [globalState, setGlobalState] = useContext(AppContext)

  // create data dynamically
  const data = props.props.map(result=>{
    return {
      title: result.nome,
      time_id: result.time_id,
      url_escudo_svg: result.url_escudo_svg,
      nome_cartola: result.nome_cartola,
    }
  })

  const handleClick = (teamId) => {
    if (!state.isLoading) {
      setState({...state, isLoading: true})
      fetch(`${process.env.REACT_APP_BACKEND_URL}time/profile`, {
       method: "POST",
       headers: {
         "content-type": "application/json"
       },
       body: JSON.stringify({
         time_id: teamId
       })
     })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        setGlobalState({
          ...globalState,
          meuTime: result
        })
        setState({
          ...state,
          redirect: '/time'
        })
     })
    }
  }

  return (
    // Needs a button or script for clearing previous search, just clear data above
    <div>
      <Divider orientation="left">Resultados</Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
          actions={[
            <Button 
              onClick={()=>handleClick(item.time_id)}
              type="primary" 
              shape="round" 
              icon={<BarChartOutlined />}
              >Analisar</Button>
            ]}>
            <List.Item.Meta
              avatar={<Avatar src={item.url_escudo_svg} />}
              title={item.title}
              description={item.nome_cartola}
            />
          </List.Item>
        )}
      />
      {state.redirect && <Redirect to={state.redirect}/>}
    </div>
  )
}

export default MyTeam_SearchResults
