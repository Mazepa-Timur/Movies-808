import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import StyleCustom from './style';

import { setOAuthAction } from './store/actions/oauthAction';

import ProfilePage from './page/profilePage';
import Movies from './page/cinema/movies';
import Series from './page/cinema/Series';
import Cartoons from './page/cinema/Cartoons';
import Anime from './page/cinema/Anime';
import About from './page/cinema/About';
import History from './page/history';
import Cinema from './page/cinema/cinema';
import ErrorPage from './page/errorPage';
import SearchPage from './page/cinema/searchPage';
import UserPage from './page/user';
// import CreateNewFilm from './page/cinema/EditFilm';

const router = createBrowserRouter([
  { path: '/', element: <ErrorPage />, errorElement: <ErrorPage /> },
  { path: '/profile', element: <ProfilePage /> },
  {
    path: '/',
    element: <Cinema />,
    children: [
      { path: 'movies', element: <Movies /> },
      { path: 'series', element: <Series /> },
      { path: 'cartoons', element: <Cartoons /> },
      { path: 'anime', element: <Anime /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'about', element: <About />},
      // { path: 'createNewFilm', element: <CreateNewFilm />},
    ],
  },

  { path: '/history', element: <History /> },
  { path: '/user', element: <UserPage /> },
]);

function App() {
  const dispatch = useDispatch();
  const {name, setting: {theme, color}} = useSelector((state) => state.userStore.user);
  document.body.className = theme;
  useEffect(() => {
    if (!name) {
      setOAuthAction('')(dispatch);
    }
  });


  return (
    <StyleCustom color={color} className={theme}>
      <div className={`App ${theme}`}>
        <RouterProvider router={router} />
      </div>
    </StyleCustom>
  );
}

export default App;
