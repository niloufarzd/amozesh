import React  from 'react'
import UserItem from './UserItem';
 import  Spinner  from './Spinner';
 import PropTypes from 'prop-types';
 const  Users =({users,loading})=> {
     if(loading){
         return <Spinner></Spinner>
 
         
     }
     else{
 
         return (
             <div className="userStyle">
                 {users.map(u=>(
                     <UserItem key={u.id} user={u}></UserItem>
                 ))
                 }
             </div>
         
         );
     }
     
 
      
 }
 Users.prototype={
     users:PropTypes.array.isRequired,
     loading:PropTypes.bool.isRequired
 }
 
 export default Users;
