import React, { useEffect,Fragment } from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from './repos/Repos'

const  User = ({getUser,getUserRepos,match,loading,repos,user}) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);


const {
  name,
  company,
  avatar_url,
  location,
  bio,
  login,
  blog,
  hireable,
  followers,
  following,
  html_url,
  public_repos,
  public_gists
} = user
         if(loading){
              return <Spinner></Spinner>

         }
        return (
            <Fragment>
            <Link to='/' className='btn btn-light '>
              Back to Search
            </Link>
            Hireable:{' '}
            {hireable ? (
              <i className='fas fa-check text-success' />
            ) : (
              <i className='fas fa-times-circle text-danger' />
            )}
            <div className='card grid-2'>
              <div className='all-center'>
                <img
                  src={avatar_url}
                  alt='user'
                  className='round-img'
                  style={{ width: '150px' }}
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
              <div>
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <a href={html_url} className='btn btn-dark   '>
                  Go to Github
                </a>
                <ul>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username: </strong>
                        {login}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company: </strong>
                        {company}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Website: </strong>
                        {blog}
                      </Fragment>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className='card text-center'>
              <div className='badge  badge-danger'>Followers: {followers}</div>
              <div className='badge badge-success'>Following: {following}</div>
              <div className='badge badge-light'>Public Repos: {public_repos}</div>
              <div className='badge badge-dark'>Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos}></Repos>

          </Fragment>
        
        )
    
}
User.propTypes = {
  user: PropTypes.bool.isRequired,
  loading: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired

};


export default User
