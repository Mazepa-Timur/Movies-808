import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setMediaAction } from '../../store/actions/mediaAction';
import MovieInfo from '../../components/movieInfo/movieInfo';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';
// import MovieForm from '../../components/movieForm/movieForm';

const About = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('id');

  const dispatch = useDispatch();
  const dataRaw = useSelector((state) => state.mediaStore.media);

  const [data, setData] = useState({});

  const updateMedia = async () => {
    if (dataRaw._id) {
      setData(dataRaw);
    }
    if (dataRaw.length) {
      const [dataOne] = await dataRaw.filter((e) => e._id === movieId);
      setData(dataOne);
    }
    if (!data._id && !dataRaw._id && !dataRaw.length) {
      const dataRefresh = await setMediaAction({ _id: movieId }, 'search')(dispatch);
      setData(dataRefresh);
    }
  };

  useEffect(() => {
    if (!data._id) {
      updateMedia();
      console.log(1, data);
    }
  });

  return (
    <React.Fragment>
      {/* {data._id && <MovieForm data={data} />} */}
      {data._id && <MovieInfo data={data} />}
      {data.video && <VideoPlayer video={data.video} />}
    </React.Fragment>
  );
};

export default About;
