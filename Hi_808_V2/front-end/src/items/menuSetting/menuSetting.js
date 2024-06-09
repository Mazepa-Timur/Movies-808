import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userStoreAction } from '../../store/reducers/userStore';

import './menuSetting.css';

const MenuSetting = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userStore.user)
  const theme = useSelector((state) => state.userStore.user.setting.theme);
  const textTheme = theme === 'darkTheme' ? 'dark theme' : 'light theme';
  
  const changeUserTheme = () => {
    dispatch(userStoreAction.changeTheme())
  }
  const resetLogin = () => {
    dispatch(userStoreAction.removeUserData())
  }

  return (
    <div className={`close ${theme}`} onClick={() => props.show(false)}>
      <div className="menuSetting">
        {user.name && <Link to="/profile">Setting</Link>}
        {/* {user.name && <Link to="/createNewFilm">Create Film</Link>} */}
        <p onClick={changeUserTheme}>{textTheme}</p>
        {user.name && <p onClick={resetLogin}>Sign out</p>}
      </div>
    </div>
  );
};

export default MenuSetting;
