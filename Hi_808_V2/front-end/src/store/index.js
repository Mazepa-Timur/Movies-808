import { configureStore } from '@reduxjs/toolkit';

import settingTheme from './theme.js';
import userData from './user.js'
import activity from './activity.js';

const store = configureStore({
  reducer: {
    themeStyle: settingTheme,
    userData: userData,
    activity: activity
  },
});

export default store;
