import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import UserItem from './Component/UserItem';

export class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <UserItem></UserItem>
      </div>
    )
  }
}

export default App;
