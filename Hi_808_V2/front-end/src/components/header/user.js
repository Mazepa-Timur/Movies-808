import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './user.css'

import ExitAccaunt from "../ModalWindows.js/exitAccaunt";
import SettingUser from '../ModalWindows.js/UserSetting';

const Login = () => {
  const user = useSelector(state => state.userData.user);

  const [isHideList, setIsHide] = useState(false);
  const [typeWindow, setTypeWindow] = useState('');

  const showList = () => {
    setIsHide(true);
  }
  const hideList = () => {
    document.body.style.overflowY = 'auto';
    setIsHide(false);
  }
  const setting = () => {
    setTypeWindow('setting');
  }
  const exitAccaunt = () => {
    setTypeWindow('exit');
  }

  return (
    <div className='userButtons'>
      {typeWindow === 'exit' && isHideList && <ExitAccaunt close={setTypeWindow} />}
      {typeWindow === 'setting' && isHideList && <SettingUser close={setTypeWindow} />}
      {/* <a className='history' href='/'>history</a> */}
      <p className='username' onClick={showList} >{user.name}</p>
      {isHideList && <div className='hideList' onClick={hideList}></div>}
      {isHideList && <div className='listBox'>
        <p onClick={setting} className='listButton'>Setting</p>
        <p onClick={exitAccaunt} className='listButton'>Exit</p>
      </div>}
    </div>
  );
};

export default Login;
