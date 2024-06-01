import { userStoreAction } from '../reducers/userStore';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const setSettingAction = (data, typeForm) => {
  return async (dispatch) => {
    try {
      if (Object.keys(data).length) {
          if (typeForm === 'setting') {
            const response = await fetch('http://localhost:8008/user/setting', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: cookies.get('access_token'),
              },
              body: JSON.stringify(data),
            });
            const res = await response.json();
            if (response.ok) {
              dispatch(userStoreAction.changeSetting({color: data.color, theme: data.theme}));
              console.log('Setting success');
            } else {
              console.log(res);
            }
          }
        }
    } catch (error) {
      console.error('hi-808: ', error);
      return error;
    }
  };
};
