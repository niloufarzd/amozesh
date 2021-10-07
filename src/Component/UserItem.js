import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const  UserItem  = ({user:{avatar_url,html_url,login}}) =>{
    
        return (
            <div className=" card  text-center">
             <img src={avatar_url} alt='xxx' className='round-img' style={{width:'60px'}}></img>  
            <h3>{login}</h3>      
            <Link to={`/user/${login}`} className="btn btn-dark">more</Link>
            </div>
        )
    }

    UserItem.propTypes={
          user: PropTypes.object.isRequired,


    };

export default UserItem
