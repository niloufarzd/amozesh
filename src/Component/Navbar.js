import React  from 'react'
import PropTypes from 'prop-types'

const  Navbar = ({icon,title})=>  {
   
        return (
            <div>
                <nav className='nav  bg-danger'> 
                    <h1>
                        <i className={icon}>{title}</i>
                    </h1>
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
