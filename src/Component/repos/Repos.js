import React from 'react';
import Repoitem from './RepoITEM'
import PropTypes from 'prop-types';

 const Repos = ({repos}) => {
    return ( repos.map(repo =>
        <Repoitem key={repo.id} repo={repo}></Repoitem>
        )
      
    )
  
};
Repos.prototype={
    repos:PropTypes.array.isRequired
}
export default Repos;