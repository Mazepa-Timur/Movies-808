import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMediaAction } from '../../store/actions/mediaAction';
import SearchEngine from '../../items/searchEngine/searchEngine';
import CollectionCardsMedia from '../../components/collectionCards/collectionCardsMedia';

const Series = () => {
  const dispatch = useDispatch();
  const {media: data, type} = useSelector((state) => state.mediaStore);
  
  useEffect(() => {
    if (type !== 'series') {
      setMediaAction({type: 'series'}, 'search', 'series')(dispatch);
    }
  });

  return (
    <React.Fragment>
    <SearchEngine />
    <CollectionCardsMedia data={data} />
    </React.Fragment>
  );
};

export default Series;
