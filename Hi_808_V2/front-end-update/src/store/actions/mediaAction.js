import { mediaStoreAction } from '../reducers/mediaStore';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const setMediaAction = (request, type, typeMedia = 'none') => {
  return async (dispatch) => {
    try {
      if (type === 'search') {
        const response = await fetch('http://localhost:8008/film/foundFilm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
        });
        const res = await response.json();
        if (response.ok) {
          dispatch(mediaStoreAction.setMedia(res));
          dispatch(mediaStoreAction.setMediaType(typeMedia));
          console.log('Api work', typeMedia);
          return res;
        } else {
          throw res.message;
        }
      }
      if (type === 'rating' && cookies.get('access_token')) {
        const response = await fetch(
          'http://localhost:8008/rating/createNewRating',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookies.get('access_token'),
            },
            body: JSON.stringify(request),
          }
        );
        const res = await response.json();
        if (response.ok) {
          console.log('Api work', res);
          return res;
        } else {
          throw res.message;
        }
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error;
    }
  };
};
