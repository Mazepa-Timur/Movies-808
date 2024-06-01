import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './userLogin.css'

import FormLoginRegister from './FormLoginRegister.js';
import FormLoginSingIn from './FormLoginSingIn.js';
import { activityAction } from '../../store/activity.js';

const UserLogin = (props) => {
  const dispatch = useDispatch();
  const typeLogin = useSelector(state => state.activity.typeLogin);

  const { theme } = useSelector(state => state.themeStyle);

  const showList = () => {
    dispatch(activityAction.isActivity({typeLogin: ''}))
  }

  return (
        <div className='userLogin'>
          { typeLogin && <div className='hideBox' onClick={showList}>11</div>}
          { typeLogin === 'singIn' && <FormLoginSingIn theme={theme} />}
          { typeLogin === 'register' && <FormLoginRegister theme={theme}  />}
        </div>
  );
};

export default UserLogin;
