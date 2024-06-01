import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import './header.css';

import logo from '../image/808.jpg';
import Navigator from '../items/navigator/navigator';
import MenuSetting from '../items/menuSetting/menuSetting';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  if (showMenu) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = '15px';
  } else {
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = '0px';
  }
  return (
    <header>
      <img className="mainLogo"
        onClick={() => setShowMenu(true)}
        src={logo}
        alt="logo"
        width={'50px'} />
      <Navigator />
      {showMenu && createPortal(
          <MenuSetting show={setShowMenu} />,
          document.querySelector('.App')
        )}
    </header>
  );
};

export default Header;
