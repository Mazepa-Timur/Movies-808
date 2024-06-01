import React from 'react';

import './userErrorMessage.css';
import { useSelector } from 'react-redux';

const UserErrorMessage = () => {
  const errors = useSelector((state) => state.userStore.errors);
//   console.log(errors);
  return (
    <div className="errorMessage">
      {errors.map((element, index) => {
        return <p key={index} className={`${element.errorType}`}>{`${element.message}`}</p>;
      })}
    </div>
  );
};

export default UserErrorMessage;
