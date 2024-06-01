import { userStoreAction } from '../reducers/userStore';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const setOAuthAction = (data) => {
  return async (dispatch) => {
    try {
      if (cookies.get('access_token')) {
        let response = await fetch(
          'http://localhost:8008/user/authorization',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookies.get('access_token'),
            },
            body: '',
          }
        );
        if (response.status >= 500) {
          response = await fetch(
            'http://localhost:8008/user/updateToken',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                refresh_token: cookies.get('refresh_token'),
              }),
            }
          );
        }
        const res = await response.json();
        if (response.ok) {
          dispatch(userStoreAction.setUserData(res.user));
        } else {
          dispatch(userStoreAction.removeUserData());
        }
      }
    } catch (error) {
      console.error('hi-808: ', error);
    }
  };
};
