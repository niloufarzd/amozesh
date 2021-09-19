import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Users from './Component/Users';
import axios from 'axios';

export class App extends Component {
  state={
    users:[],
    loading:false

  };
  //create api for read information//
    async  componentDidMount(){
      this.setState({loading:true});
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_sectet=${process.env.REACT_APP_CLIENT_SECRET}`)
      this.setState({users:res.data,loading:false});
  

    
  }
  render() {
    return (
      <div className="App">
      <Navbar>
        <div className="container"></div>
      </Navbar>
      <Users users={this.state.users} loading={this.state.loading}></Users>
      </div>
    )
  }
}

export default App;
