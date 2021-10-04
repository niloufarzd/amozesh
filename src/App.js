import React, { Component, Fragment } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Users from './Component/Users';
import axios from 'axios';
import Search from './Component/Search';
import Alert  from './Component/Alert';
import About from './Component/Layout/About';
 import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
export class App extends Component {
  
  
  state={ 
    users:[],
    loading:false,
    alert:null

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
  setAlert =(msg,type)=>{
    this.setState({alert:{message:msg,type:type}});
    setTimeout(() => {
      this.setState({alert:null});
      
    }, 3000);

  };
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar>
      </Navbar>
      <div className="container">
        <Alert alert={this.state.alert}></Alert>
        <Switch>
         <Route exact path='/' render={()=>
         <Fragment>
            <Search searchUsers={this.search}
         clearUsers={this.clearUser}
        showClear={this.state.users.length>0} 
        setAlert={this.setAlert}></Search>
         <Users users={this.state.users} loading={this.state.loading}></Users>
         </Fragment>

        }></Route>
        <Route path='/about'component={About}></Route>
        </Switch>
          </div>
      </div> 
      </Router>
    )
    }
  }


export default App;
