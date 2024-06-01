import React from 'react';
import { useSelector } from 'react-redux';
import './header.css';

import Login from './header/login.js';
import User from './header/user.js';
import ButtonTheme from './header/ButtonTheme';

const Header = () => {
  const isLogin = useSelector((state) => state.activity.isLogin);

  return (
    <header>
      <div>Home</div>

      {/* <Navigation /> */}

      <div className="userLoginBox">
        <ButtonTheme />
        {isLogin === 'user' && <User />}
        {isLogin === 'login' && <Login />}
        {!isLogin && <p className='loading'>Loading...</p>}
      </div>
    </header>
  );
};

export default Header;
