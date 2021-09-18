import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Users from './Component/Users';

export class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar>
        <div className="container"></div>
      </Navbar>
      <Users></Users>
      </div>
    )
  }
}

export default App;
