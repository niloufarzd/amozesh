import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    //create defaultProps
    static defaultProps={
        title:'GithubFinder',
        icon:'fab fa-github'
    };
    // create propTypes//
    static propTypes={
        title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <nav className='nav  bg-danger'> 
                    <h1>
                        <i className={this.props.icon}>{this.props.title}</i>
                    </h1>
                </nav>
            </div>
        )
    }
}

export default Navbar
