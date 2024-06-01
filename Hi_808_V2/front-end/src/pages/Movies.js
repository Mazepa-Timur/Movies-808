import React from 'react';
import { useSelector } from 'react-redux';

import './Movies.css'

import Header from '../components/header.js'
import Main from '../components/main.js';
import Modal from '../components/UI/Modal.js';

const Movies = () => {
  const typeLogin = useSelector(state => state.activity.typeLogin);
  const {theme} = useSelector(state => state.themeStyle);
  return (
      <div className={`movies ${theme}`}>
        {typeLogin && <Modal className={`${theme}`}/>}
        <Header />
        <Main />
      </div>
  );
}

export default Movies;