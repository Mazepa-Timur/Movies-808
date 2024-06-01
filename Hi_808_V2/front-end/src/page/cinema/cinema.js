import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header';

const Cinema = () => {
  return (
    <React.Fragment>
        <Header />
        <Outlet />
    </React.Fragment>
  );
};

export default Cinema;
