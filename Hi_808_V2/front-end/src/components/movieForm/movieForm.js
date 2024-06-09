import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import SimpleInput from '../../items/simpleInput/simpleInput';
import FormStar from '../../items/stars/starsForm';

import './movieForm.css';
// import { setMediaAction } from '../../store/actions/mediaAction';
// import { useSearchParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const boy =
  'https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_QL75_UY281_CR18,0,190,281_.jpg';

const MovieForm = (props) => {
  const data = props.data;

  const [isName, setName] = useState(data.name);
  const [isDescription, setDescription] = useState(data.description);
  const [isGenre, setGenre] = useState('11');
  const [israting, setRating] =useState(data.rating);
  const [isYear, setYear] = useState(data.year);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    // setUserAction(formData)(dispatch);
    console.log(formData);
    console.log('data', data);
    // console.log('id', data);
  };
  const handName = (event) => {
    setName(event.target.value);
  };
  const handDescription = (event) => {
    setDescription(event.target.value);
  };
  const handGenre = (event) => {
    setGenre(event.target.value);
  };
  const handYear = (event) => {
    setYear(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="movieForm">
      <img className="image" src={boy} alt="" />
      <div className="infoGrid">
        <input
          className="name"
          onChange={handName}
          type={'text'}
          name={'name'}
          placeholder={'name'}
          value={isName}
        />

        <div className="starsBox">
          <FormStar star={israting} id={data._id}/>
        </div>

        <div className="infoBox">
          <div>
            <p className="infoName">genre</p>
            <input
              className="infoData"
              onChange={handGenre}
              type={'text'}
              name={'Genre'}
              placeholder={'Genre'}
              value={isGenre}
            />
          </div>
          <div>
            <p className="infoName">ageRating</p>
            <p className="infoData">+{data.ageRating}</p>
          </div>
          <div>
            <p className="infoName">rating</p>
            <p className="infoData">{data.rating}</p>
          </div>
          <div>
            <p className="infoName">year</p>
            <input
              className="infoData"
              onChange={handYear}
              type={'text'}
              name={'Year'}
              min={1900}
              max={new Date().getFullYear()}
              placeholder={'Year'}
              value={isYear}
            />
          </div>
        </div>

        <div className="description">
          <h2 className="infoName">Description:</h2>
          <div>
            <textarea
              className="infoData"
              onChange={handDescription}
              type={'text'}
              name={'description'}
              placeholder={'description'}
              value={isDescription}
            />
            {/* <p className="infoData">{isDescription}</p> */}
          </div>
        </div>
        <button className="sendButton" type="submit">
          Create and save
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
