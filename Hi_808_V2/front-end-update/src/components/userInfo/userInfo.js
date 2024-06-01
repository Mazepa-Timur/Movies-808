import React from 'react';
import { Link } from 'react-router-dom';

import './userInfo.css';

const UserInfo = (props) => {
  return (
    <section className="userInfo">
      <div className="cardInfo">
        <p>{props.user.name}</p>
        <Link className='button' to="/movies">next</Link>
      </div>
    </section>
  );
};

export default UserInfo;
