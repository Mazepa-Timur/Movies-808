import React from 'react';
import { useDispatch } from 'react-redux';
import { Cookies } from "react-cookie";

import { userAction } from '../store/user.js';
import {activityAction} from '../store/activity.js'

import API from './Database/authorization.js';
import { themeAction } from '../store/theme.js';
const cookies = new Cookies();

const AuthUser = () => {
  const dispatch = useDispatch();
  
  const autoLogin = async () => {
    if (cookies.get('access_token') !== undefined) {
      let res = await API.authorization();
      if (res === 'token incorrect') {
        res = await API.updateToken();
        if (res === 'token incorrect') {
          dispatch( userAction.clearData());
          dispatch(themeAction.restart());
          dispatch( activityAction.isActivity({isLogin: 'login'}));
        }
      }
      if (res !== 'token incorrect') {
        dispatch(userAction.updateData(res));
        dispatch(themeAction.updataSetting(res.setting));
        dispatch( activityAction.isActivity({isLogin: 'user'}) );
      }
    } else {
      dispatch( activityAction.isActivity({isLogin: 'login'}) );
    }
  };
  autoLogin();
  return <React.Fragment>
      </React.Fragment>
};

export default AuthUser;
