import React, {useState} from 'react'
import { Input } from 'antd';
import MyTeam_SearchResults from './MyTeam_SearchResults';
const { Search } = Input;

const MyTeam_Search = () => {

  const [state, setState] = useState({
    isSearching: false,
    isLoaded: false,
    payload: []
  })

  const handleSearch = (searchValue) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}time/search`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({time_name: searchValue})
      })
      .then(
        (response)=>response.json()
      )
      .then((result) => {
        console.log("search result")
        result.forEach(item=>state.payload.push(item))
        setState({
          ...state,
          isLoaded: true,
        })
      })
  }

  return (
    <div>
    <Search
      placeholder="Busque seu time"
      enterButton="Buscar"
      size="large"
      onSearch={value => handleSearch(value)}
    />

    {state.isLoaded &&
    <MyTeam_SearchResults props={state.payload} />
    }

    </div>
  )
}

export default MyTeam_Search
