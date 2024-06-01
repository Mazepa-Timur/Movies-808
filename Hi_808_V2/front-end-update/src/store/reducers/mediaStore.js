import { createSlice } from '@reduxjs/toolkit';

const mediaStore = createSlice({
  name: 'mediaStore',
  initialState: {
    media: [],
    type: 'none',
    aboutMedia: {},
    isDownload: false,
  },
  reducers: {
    setMedia: (state, action) => {
      // console.log(action.payload);
      const download = action.payload.length ? true : false;
      return { ...state, media: action.payload, isDownload: download };
    },
    setMediaType: (state, action) => {
      return { ...state, type: `${action.payload}` };
    },
    removeMedia: (state) => {
      return {
        ...state,
        media: [],
        type: '',
        aboutMedia: {},
        isDownload: false,
      };
    },
    isSearch: (state) => {
      return { ...state, isDownload: false };
    },
    localSearchId: (state, action) => {
      const aboutMedia = state.media.filter((e) => e._id === action.payload);
      console.log(aboutMedia);
      return { ...state, aboutMedia };
    },
    default: (state) => {
      return state;
    },
  },
});
export const mediaStoreAction = mediaStore.actions;

export default mediaStore.reducer;
