import React, { Component } from 'react'

export class UserItem extends Component {
    constructor(){
        super();
        this.state={
           
    "login": "mojombo",
    "id": 1,
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "html_url": "https://github.com/mojombo",

        };
    }
    render() {
        
        const {avatar_url,html_url,login}=this.state;
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
