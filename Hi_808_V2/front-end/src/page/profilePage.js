import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header';
import SettingForm from '../items/settingForm/settingForm';

const ProfilePage = () => {
  const user = useSelector((state) => state.userStore.user);
  return (
    <React.Fragment>
      <Header />
      {user.logo && <img src={user.logo} alt='' />}
      <SettingForm />
    </React.Fragment>
  );
};

export default ProfilePage;
