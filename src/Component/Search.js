import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Search extends Component {
     state={
         text:''
        }

    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        showClear:PropTypes.func.isRequired,
        clearUsers:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired

    };
    onChange = e=> this.setState({[e.target.name]:e.target.value});
    onsubmit = e=>{
        e.preventDefault();
        if(this.state.text === ''){

            this.props.setAlert('please enter somethings','light')
        }
       
        else{
            this.props.searchUsers(this.state.text);
        }
      
    };
    render() {
        const {showClear,clearUsers}=this.props;
        return (
            <div>
                <form   onSubmit={this.onsubmit} className="form">
                    <input type="text" className="bg-white btn-block my-2" name="text" placeholder="search users" 
                     onChange={this.onChange} value={this.state.text}
                     >
                    </input>
                    <input type="submit" value="search"  className="btn btn-dark btn-block"></input>
                </form>
                {showClear &&
                   <button className="btn btn-light  btn-block" onClick={clearUsers}>clear</button>
                            }
            </div>
        )
    }
}

export default Search
