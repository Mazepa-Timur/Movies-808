import React from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './style.css';
import StyleCustom from './style.js';

import Movies from './pages/Movies.js';
import FilmEdit from './pages/FilmEdit.js';
import ChangePassword from './pages/ChangePassword.js';

const router = createBrowserRouter([
  { path: '/', element: <Movies />},
  { path: '/FilmEdit', element: <FilmEdit />},
  { path: '/ChangePassword', element: <ChangePassword />}
])

const App = () => {
  const {color} = useSelector(state => state.themeStyle);
  return (
    <StyleCustom color={color}>
      <RouterProvider router={router} />
    </StyleCustom>
  );
}

export default App;