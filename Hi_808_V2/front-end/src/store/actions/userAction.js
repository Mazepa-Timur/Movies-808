import { userStoreAction } from '../reducers/userStore';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const RegExpEmail = new RegExp('[a-zA-Z0-9]@.');
// const RegExpGmail = new RegExp(/^[A-Z0-9._%+-]+@gmail.com$/i);
const RegExpPassword = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

export const setUserAction = (data, typeForm) => {
  return async (dispatch) => {
    try {
      if (Object.keys(data).length) {
        let errorList = [];
        if (!RegExpEmail.test(data.email)) {
          errorList.push({
            errorType: 'errorText',
            message: `incorrect email`,
          });
        }
        if (!RegExpPassword.test(data.password)) {
          errorList.push({
            errorType: 'errorText',
            message: `incorrect password`,
          });
        }

        if (!errorList.length) {
          if (!typeForm) {
            const {name, email, password} = data;
            const response = await fetch(
              'http://localhost:8008/user/register',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name, email, password}),
              }
            );
            const res = await response.json();
            if (response.ok) {
              console.log(res);
            }
            if (response.status === 500) {
              errorList.push({
                errorType: 'errorText',
                message: `User already`,
              });
            }
          }
          if (typeForm) {
            const response = await fetch('http://localhost:8008/user/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
            const res = await response.json();
            if (response.ok) {
              cookies.set('access_token', res.access_token);
              cookies.set('refresh_token', res.refresh_token);
              dispatch(userStoreAction.setUserData(res.user));
            }
            if (response.status === 500) {
              errorList.push({
                errorType: 'errorText',
                message: `Email or password incorrect`,
              });
            }
          }
        }
        dispatch(userStoreAction.setLoginError(errorList));
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error;
    }
  };
};
