import { createSlice } from '@reduxjs/toolkit';

const userData = createSlice({
  name: 'userData',
  initialState: {
    user: {
        name: ""
    }
  },
  reducers: {
    updateData: (state, action) => {
      const {name, email} = action.payload
      return {...state, user: {name, email}}
    },
    clearData: (state) => {
      return { user: {}}
    }
  },
});
export const userAction = userData.actions;

export default userData.reducer;
