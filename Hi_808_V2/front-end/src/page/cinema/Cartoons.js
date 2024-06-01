import React, { useEffect } from 'react';
import SearchEngine from '../../items/searchEngine/searchEngine';
import CollectionCardsMedia from '../../components/collectionCards/collectionCardsMedia';
import { setMediaAction } from '../../store/actions/mediaAction';
import { useDispatch, useSelector } from 'react-redux';

const Cartoons = () => {
  const dispatch = useDispatch();
  const {media: data, type} = useSelector((state) => state.mediaStore);
  
  useEffect(() => {
    if (type !== 'cartoons') {
      setMediaAction({type: 'cartoons'}, 'search', 'cartoons')(dispatch);
    }
  });

  return (
    <React.Fragment>
    <SearchEngine />
    <CollectionCardsMedia data={data} />
    </React.Fragment>
  );
};

export default Cartoons;
