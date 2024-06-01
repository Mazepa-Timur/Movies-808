import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Cookies } from "react-cookie";

import { userAction } from '../../store/user.js';
import { themeAction } from '../../store/theme.js';

import './exitAccaunt.css'
import { activityAction } from '../../store/activity.js';

const ExitAccaunt = (props) => {
  const cookies = new Cookies();

  document.body.style.overflowY = 'hidden';
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData.user);

  const exitAccaunt = () => {
    cookies.remove('access_token');
    cookies.remove('refresh_token');
    dispatch(userAction.clearData());
    dispatch(themeAction.restart());
    dispatch( activityAction.isActivity({isLogin: 'login'}));
    document.body.style.overflowY = 'auto';
    props.close(false)
  }
  const closeWindow = () => {
    document.body.style.overflowY = 'auto';
    props.close(false)
  }

  return (
        <div className='exitAccaunt'>
            <h2>{`Exit accaunt ${user.name} ?`}</h2>
            <div className='boxButton'>
                <button onClick={exitAccaunt}>Okey</button>
                <button onClick={closeWindow}>Close</button>
            </div>
        </div>
  );
};

export default ExitAccaunt;