import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { themeAction } from '../../store/theme.js';

import './buttonTheme.css';

import moon from '../../img/moon.svg';
import sun from '../../img/sun.svg';

const ButtonTheme = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.themeStyle.theme);
  const iconTheme = theme === 'lightTheme' ? sun : moon;
  const buttonTheme = async () => {
    dispatch(themeAction.changeTheme());
  };
  return (
    <div>
      <img className="imageSize" onClick={buttonTheme} src={iconTheme} alt="logo" />
    </div>
  );
};

export default ButtonTheme;
