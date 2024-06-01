import { configureStore } from '@reduxjs/toolkit';

import mediaStore from './mediaStore';
import userStore from './userStore';

const store = configureStore({
  reducer: {
    mediaStore,
    userStore,
  },
});

export default store;
