import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './navigator.css';

const Navigator = () => {
  const {isLogin, user} = useSelector((state) => state.userStore);
  return (
    <div className="navigator">
      <div>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/cartoons">Cartoons</Link>
        <Link to="/anime">Anime</Link>
      </div>
      <div>
        {/* <Link to="/history">history</Link> */}
        {isLogin && <Link to="/profile">{user.name}</Link>}
        {!isLogin && <Link to="/user">Login</Link>}
      </div>
    </div>
  );
};

export default Navigator;
