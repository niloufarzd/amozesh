import React, { Component } from 'react'

export class UserItem extends Component {
    
    render() {
        
        const {avatar_url,html_url,login}=this.props.user;
        return (
            <div className=" card  text-center">
             <img src={avatar_url} alt='xxx' className='round-img' style={{width:'60px'}}></img>  
            <h3>{login}</h3>      
            <a href={html_url} className="btn btn-dark">more</a>
            </div>
        )
    }
}

export default UserItem
