import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const localTheme = localStorage.getItem('theme');
const themeDefault = localTheme === 'darkTheme' ? 'darkTheme' : 'lightTheme';

const userStore = createSlice({
  name: 'userStore',
  initialState: {
    user: {
      name: '',
      setting: {
        theme: themeDefault,
        color: '#1889C8',
      },
    },
    errors: [],
    isLogin: false
  },
  reducers: {
    setLoginError: (state, action) => {
      return { ...state, errors: action.payload };
    },
    setUserData: (state, action) => {
      return { ...state, user: {...action.payload, setting: {...action.payload.setting, theme: themeDefault}}, isLogin: true, errors: [] };
    },
    removeUserData: (state) => {
      cookies.remove('access_token');
      cookies.remove('refresh_token');
      return {...state, user: { name: '', setting: { theme: themeDefault, color: '#1889C8'}}, isLogin: false, errors: [] };
    },
    changeTheme: (state) => {
      const theme = state.user.setting.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
      localStorage.setItem('theme', theme);
      return {...state, user: { ...state.user, setting: { ...state.user.setting, theme: theme }}};
    },
    changeSetting: (state, action) => {
      localStorage.setItem('theme', action.payload.theme);
      return { ...state, user: {...state.user, setting: {color: action.payload.color, theme: action.payload.theme}}};
    },
  },
});

export const userStoreAction = userStore.actions;

export default userStore.reducer;
