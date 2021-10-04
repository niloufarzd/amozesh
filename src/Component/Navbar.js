import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const  Navbar = ({icon,title})=>  {
   
        return (
            <div>
                <nav className='  navbar bg-danger'> 
                    <h1>
                        <i className={icon}>{title}</i>
                    </h1>
                    <ul>
                        <li>
                         <Link to='/'>Home</Link>
                        </li>
                        <li>
                        <Link  to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    
}
 //create defaultProps
 Navbar.defaultProps={
    title:'GithubFinder',
    icon:'fab fa-github'
};
// create propTypes//
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
};

export default Navbar
