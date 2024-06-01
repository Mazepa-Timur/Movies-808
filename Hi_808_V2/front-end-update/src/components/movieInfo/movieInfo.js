import React from 'react';

import './movieInfo.css';

import FormStar from '../../items/stars/starsForm';

const MovieInfo = (props) => {
  let genre = '';
  if (props.data.genre) {
    for (let i = 0; i < props.data.genre.length; i++) {
      if (i > 0) {
        genre += `, ${props.data.genre[i]}`;
      } else {
        genre += `${props.data.genre[i]}`;
      }
    }
  }
  return (
    <section className="movieInfo">
      <img src={props.data.image} alt="" />
      <div className="infoGrid">
        <h1>{props.data.name}</h1>

        <div className="starsBox">
          {props.data.rating && (
            <FormStar
              star={Math.round(props.data.rating)}
              id={props.data._id}
            />
          )}
        </div>

        <div className="infoBox">
          <div>
            <p className="infoName">genre</p>
            <p className="infoData">{genre}</p>
          </div>
          <div>
            <p className="infoName">ageRating</p>
            <p className="infoData">+{props.data.ageRating}</p>
          </div>
          <div>
            <p className="infoName">rating</p>
            <p className="infoData">{Math.round(props.data.rating)}</p>
          </div>
          <div>
            <p className="infoName">year</p>
            <p className="infoData">{props.data.year}</p>
          </div>
        </div>

        <div className="description">
          <h2 className="infoName">Description:</h2>
          <div>
            <p className="infoData">{props.data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
