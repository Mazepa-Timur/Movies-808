import { createSlice } from '@reduxjs/toolkit';

const localTheme = localStorage.getItem('theme')
const themeDefault = localTheme === 'darkTheme' ? 'darkTheme' : 'lightTheme';

const settingTheme = createSlice({
  name: 'themeStyle',
  initialState: {
    theme: themeDefault,
    color: '#1889C8',
  },
  reducers: {
    changeTheme: (state) => {
      const theme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
      localStorage.setItem('theme', theme);
      return {...state, theme}
    },
    changeColor: (state, action) => {
      const {color} = action.payload
      return {...state, color}
    },
    updataSetting: (state, action) => {
      const {color} = action.payload
      const theme = action.payload.theme === 'darkTheme' ? 'darkTheme' : 'lightTheme';
      return {...state, color, theme}
    },
    restart: (state) => {
      return { theme: themeDefault, color: '#1889C8' }
    }
  },
});
export const themeAction = settingTheme.actions;

export default settingTheme.reducer;
