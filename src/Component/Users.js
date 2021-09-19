import React, { Component }  from 'react'
import UserItem from './UserItem';



class  Users  extends Component {
render(){
    return (
        <div className="userStyle">
            {this.props.users.map(u =>(
                <UserItem key={u.id} user={u}></UserItem>

            ))}
            
        </div>
    );

}
     
    }
   
   

export default Users
