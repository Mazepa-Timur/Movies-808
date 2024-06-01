import { createSlice } from '@reduxjs/toolkit';

const activity = createSlice({
  name: 'activity',
  initialState: {
    isLogin: '',
    typeLogin: '',
    pageOpen: '',
    filmId: ''
  },
  reducers: {
    isActivity: (state, action) => {
        return {...state, ...action.payload}
    },
    typeLogin: (state, action) => {
        const {typeLogin} = action.payload;
        if (typeLogin === 'singIn' ||  typeLogin === 'register') {
            return {...state, typeLogin }
        } else {
          return {...state, typeLogin: '' }
        }
    }
  },
});
export const activityAction = activity.actions;

export default activity.reducer;
