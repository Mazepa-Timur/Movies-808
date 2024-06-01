import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setMediaAction } from '../../store/actions/mediaAction';

import CollectionCardsMedia from '../../components/collectionCards/collectionCardsMedia';
import SearchEngine from '../../items/searchEngine/searchEngine';
import { mediaStoreAction } from '../../store/reducers/mediaStore';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('name');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mediaStore.media);

  useEffect(() => {
    const update = async () => {
      await setMediaAction({ name: movieName }, 'search')(dispatch);
      await dispatch(mediaStoreAction.isSearch());
      console.log('not movie', movieName);
    };
      update();
  }, [movieName, dispatch]);

  return (
    <React.Fragment>
      <SearchEngine />
      <CollectionCardsMedia data={data} />
    </React.Fragment>
  );
};

export default SearchPage;
