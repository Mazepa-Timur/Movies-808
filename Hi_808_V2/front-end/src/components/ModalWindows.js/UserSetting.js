import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { themeAction } from '../../store/theme.js';

import './UserSetting.css';
import API_USER from '../Database/userServises.js';

const SettingUser = (props) => {
  document.body.style.overflowY = 'hidden';
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.user);
  const setting = useSelector((state) => state.themeStyle);
  const [color, setColor] = useState();

  const changeTheme = (data, type) => {
    if ( type === 'color') {
      setColor(data)
    }
  }
  const SaveSetting = async () => {
    dispatch(themeAction.updataSetting({...setting, color}));
    await API_USER.updateUserSetting({...setting, color});

    document.body.style.overflowY = 'auto';
    props.close(false);
  };
  const closeWindow = () => {
    document.body.style.overflowY = 'auto';
    props.close(false);
  };
  return (
    <div className="userSetting">
      <h2>{`Setting ${user.name} ?`}</h2>
      <label>Color: </label>
      <input className='swatchColor' onChange={event => changeTheme(event.target.value, 'color')} type='color'/>
      <div className="boxButton">
        <button onClick={SaveSetting}>Save</button>
        <button onClick={closeWindow}>Close</button>
      </div>
    </div>
  );
};

export default SettingUser;
