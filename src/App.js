import React, { Component, Fragment } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Users from './Component/Users';
import axios from 'axios';
import Search from './Component/Search';
import Alert  from './Component/Alert';
import About from './Component/Layout/About';
import User from './Component/User';
 import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
export class App extends Component {
  
  
  state={ 
    users:[],
    repos:[],
    user:{},
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
  getUser = async username =>{
    this.setState({loading:true});
    const res = await axios.get
    (`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_sectet=${process.env.REACT_APP_CLIENT_SECRET}`

  );

    this.setState({user: res.data,loading:false});
  };
  getUserRepose = async username =>{
    this.setState({loading:true});
    const res = await axios.get
    (`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_sectet=${process.env.REACT_APP_CLIENT_SECRET}`

  );

    this.setState({repos: res.data,loading:false});
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
    const  {user ,users,loading,repos}=this.state;

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
         <Users users={users} loading={loading}></Users>
         </Fragment>

        }></Route>
        <Route exact path='/about' component={About}></Route>
        <Route 
        exact 
        path='/user/:login'  
        render={props=>(
          <User    
        {...props}
          getUser={this.getUser}  getUserRepose={this.getUserRepose}loading={loading} user={user}  repos={repos}></User>
        )}></Route>

    
        </Switch>
          </div>
      </div> 
      </Router>
    );
    }
  }


export default App;
