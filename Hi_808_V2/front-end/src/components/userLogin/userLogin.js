import React from 'react';

import './userLogin.css';

import UserForm from '../../items/userForm/userForm';
import UserErrorMessage from '../../items/userErrorMessage/userErrorMessage';

const UserLogin = () => {

  return (
    <section className="userLogin">
      <div className="userSing">
        <UserForm/>
        <UserErrorMessage />
      </div>
    </section>
  );
};

export default UserLogin;
