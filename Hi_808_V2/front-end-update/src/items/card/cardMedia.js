import React from 'react';

import './cardMedia.css';
import { Link } from 'react-router-dom';

const CardMedia = (props) => {
  return (
    <div className="card">
      <div className="img">
        <Link to={`/About?id=${props.data._id}`}>
          <img src={props.data.image} alt=''/>
        </Link>
        <div className="like"></div>
      </div>
      <h3>{props.data.name}</h3>
      <h4>{props.data.year}</h4>
    </div>
  );
};

export default CardMedia;
