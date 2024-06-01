import React, { useEffect } from 'react';
import Header from '../components/header';
import ListСollection from '../components/listСollection/listСollection';
import { useDispatch, useSelector } from 'react-redux';
import { setMediaAction } from '../store/actions/mediaAction';

const History = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mediaStore.media);
  
  useEffect(() => {
    if (!data.length) {
      setMediaAction({name: ''})(dispatch);
    }
  });
  return (
    <React.Fragment>
      <Header />
      <ListСollection data={data} />
    </React.Fragment>
  );
};

export default History;
