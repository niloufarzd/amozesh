import React, { useState, Fragment } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Users from './Component/Users';
import axios from 'axios';
import Search from './Component/Search';
import Alert  from './Component/Alert';
import About from './Component/Layout/About';
import User from './Component/User';
 import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
const  App  =()=> {
   const [users,setUsers]=useState([]);
   const [user,setUser]=useState({});
   const [repos,setRepos]=useState([]);
   const [loading,setLoading]=useState(false);
   const [alert,setAlert]=useState(null);

  
   const search = async text =>{
    setLoading(true);
    const res = await axios.get
    (`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_sectet=${process.env.REACT_APP_CLIENT_SECRET}`

  );
  setLoading(false);
  setUsers(res.data.items);

  };
   const getUser = async username =>{
    setLoading(true);
    const res = await axios.get
    (`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_sectet=${process.env.REACT_APP_CLIENT_SECRET}`

  );

  setLoading(false);
  setUser(res.data); 
 };
 const getUserRepose = async username =>{
    setLoading(true);

  const res = await axios.get
    (`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_sectet=${process.env.REACT_APP_CLIENT_SECRET}`

  );
  setLoading(false);
  setRepos(res.data); 

};
   const clearUser =()=>{
  setUsers([]);
 setLoading(false);

  };
   const showAlert =(msg,type)=>{
      setAlert({message:msg,type:type})
    setTimeout(() => {
      setAlert(null)      
    }, 3000);

  };

    return (
      <Router>
      <div className="App">
      <Navbar>
      </Navbar>
      <div className="container">
        <Alert alert={alert}></Alert>
        <Switch>
         <Route exact path='/' render={()=>
         <Fragment>
            <Search searchUsers={search}
         clearUsers={clearUser}
        showClear={users.length>0} 
        setAlert={showAlert}></Search>
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
          getUser={getUser}  getUserRepose={getUserRepose}loading={loading} user={user}  repos={repos}></User>
        )}></Route>

    
        </Switch>
          </div>
      </div> 
      </Router>
    );
    
  }


export default App;
