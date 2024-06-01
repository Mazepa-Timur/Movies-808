import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMediaAction } from '../../store/actions/mediaAction';

import CollectionCardsMedia from '../../components/collectionCards/collectionCardsMedia';
import SearchEngine from '../../items/searchEngine/searchEngine';

const Movies = () => {
  const dispatch = useDispatch();
  const {media: data, type} = useSelector((state) => state.mediaStore);
  
  useEffect(() => {
    if (type !== 'movies') {
      setMediaAction({type: 'movies'}, 'search', 'movies')(dispatch);
    }
  });

  return <React.Fragment>
    <SearchEngine />
    <CollectionCardsMedia data={data} />
    </React.Fragment>;
};

export default Movies;
