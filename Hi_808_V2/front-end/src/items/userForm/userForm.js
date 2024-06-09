import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './userForm.css';

import EmailImage from '../../image/emailSvg.svg';
import PesswordIgame from '../../image/passwordSvg.svg';
import arrowLogin from '../../image/arrowLogin.svg';

import SimpleInput from '../simpleInput/simpleInput';
import { setUserAction } from '../../store/actions/userAction';

const UserForm = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState('login');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    setUserAction(formData, isLogin)(dispatch);
  };

  const handButton = () => {
    setIsLogin(isLogin === 'login' ? 'register' : 'login');
  };

  return (
    <form onSubmit={handleSubmit} className="userForm">
      <img
        onClick={handButton}
        className="imageChange"
        src={arrowLogin}
        alt=""
      />
      <div className="boxInput">
        {isLogin === 'register' && (
          <label>
            <img src={EmailImage} alt="" />
            <SimpleInput type={'text'} name={'name'} placeholder={'name'} />
          </label>
        )}
        <label>
          <img src={EmailImage} alt="" />
          <SimpleInput type={'text'} name={'email'} placeholder={'email'} />
        </label>
        <label>
          <img src={PesswordIgame} alt="" />
          <SimpleInput
            type={'password'}
            name={'password'}
            placeholder={'password'}
          />
        </label>
        {isLogin === 'register' && (
          <label>
            <img src={PesswordIgame} alt="" />
            <SimpleInput
              type={'password'}
              name={'passwordTwo'}
              placeholder={'passwordTwo'}
            />
          </label>
        )}
      </div>
      <button className="sendButton" type="submit">
        login
      </button>
    </form>
  );
};

export default UserForm;
