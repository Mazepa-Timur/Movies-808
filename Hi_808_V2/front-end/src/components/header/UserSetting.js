import React from 'react';

import { useSelector } from 'react-redux';

import './login.css'
import './user.css'


const Login = () => {
  const user = useSelector(state => state.userData.user);

  return (
    <div className='userButtons'>
        {/* <a className='history' href='/'>history</a> */}
        <p className='username' >{user.name}</p>
    </div>
  );
};

export default Login;
