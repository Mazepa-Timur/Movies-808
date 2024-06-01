import React from 'react';
import { useDispatch } from 'react-redux';
import './login.css'

import {activityAction} from '../../store/activity.js';

const User = () => {
  const dispatch = useDispatch();
  const logimForms = (typeLogin) => {
    dispatch(activityAction.typeLogin({typeLogin}));
  }

  return (
    <div className='loginButtons'>
        <p className='singIn' onClick={()=>logimForms('singIn')}>{'sing in'}</p>
        <p className='register' onClick={()=>logimForms('register')}>{'register'}</p>
    </div>
  );
};

export default User;
