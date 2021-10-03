import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Users from './Component/Users';
import axios from 'axios';
import Search from './Component/Search';

export class App extends Component {
  
  
  state={ 
    users:[],
    loading:false

  };
  
  search = async text =>{
    this.setState({loading:true});
    const res = await axios.get
    (`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_sectet=${process.env.REACT_APP_CLIENT_SECRET}`

  );

    this.setState({users: res.data.items,loading:false});
  };
  clearUser =()=>{
    this.setState({users: [],loading:false});


  }
  render() {
    return (
      <div className="App">
      <Navbar>
        <div className="container"></div> 
      </Navbar>
      <Search searchUsers={this.search} clearUsers={this.clearUser} showClear={this.state.users.length>0}></Search>

      <Users users={this.state.users} loading={this.state.loading}></Users>
      </div>
    )
    }
  }


export default App;
