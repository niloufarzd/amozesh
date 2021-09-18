import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    //craete defauktProps
      static defaultProps={
          title:'githubfinder',
          icon:'fab fa-github'
      };
      //tarif prototype
       static PropTypes={
           title:PropTypes.string.isRequired,
           icon:PropTypes.string.isRequired

       };
    render() {
        return (
            //ijad nav va v=farakhab=ni ba props//
            <div>
            
            <nav className="navbar bg-danger">
            <h1>
                <i className={this.props.icon}>{this.props.title}</i>
            </h1>
            </nav>
          
              
            </div>
        )
    }
}

export default Navbar
