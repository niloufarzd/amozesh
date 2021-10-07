import React, {useState}from 'react'
import PropTypes from 'prop-types';

 const Search  =({setAlert,searchUsers,clearUsers,showClear})=> {
    const [text,setText]=useState('');

    
     const onChange = e=> setText(e.target.value);
     const onsubmit = e=>{
        e.preventDefault();
        if(text === ''){

            setAlert('please enter somethings','light')
        }
       
        else{
            searchUsers(text);
            setText('');
        }
      
    };
    
        return (
            <div>
                <form   onSubmit={onsubmit} className="form">
                    <input type="text" className="bg-white btn-block my-2" name="text" placeholder="search users" 
                     onChange={onChange} value={text}
                     >
                    </input>
                    <input type="submit" value="search"  className="btn btn-dark btn-block"></input>
                </form>
                {showClear &&
                   <button className="btn btn-light  btn-block" onClick={clearUsers}>clear</button>
                            }
            </div>
        );

 };
    
                        
Search.propTypes={
    searchUsers:PropTypes.func.isRequired,
    showClear:PropTypes.func.isRequired,
    clearUsers:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired

};

export default Search
