import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/reducers/index';
import StyledCounter from './style';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CookiesProvider defaultSetCookies={{ path: '/' }}>
    <Provider store={store}>
      <StyledCounter>
        <App />
      </StyledCounter>
    </Provider>
  </CookiesProvider>
);
