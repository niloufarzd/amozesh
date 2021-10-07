
import React from 'react'
import PropTypes from 'prop-types';

export const RepoITEM = ({repo}) => {
    return (
        <div className="card ">
            <a href={repo.html_url}>{repo.name}</a>
                
        </div>
       
    );

};
RepoITEM.prototype={
    repo:PropTypes.object.isRequired
}


export default RepoITEM;
