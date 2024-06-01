import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/header';
import UserLogin from '../components/userLogin/userLogin';
import UserInfo from '../components/userInfo/userInfo';

const UserPage = () => {
  const { user, isLogin } = useSelector((state) => state.userStore);
  return (
    <React.Fragment>
      <Header />
      {!isLogin && <UserLogin />}
      {isLogin && <UserInfo user={user} />}
    </React.Fragment>
  );
};

export default UserPage;
