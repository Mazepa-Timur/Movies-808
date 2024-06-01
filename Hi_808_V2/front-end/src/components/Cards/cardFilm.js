import React from 'react';
import { Link, redirect } from 'react-router-dom';
import './cardFilm.css';

const CardFilm = (props) => {
  return (
    <div className='filmCard'>
        {props.data &&
        <Link to={`/FilmEdit?index=${props.data._id}`}>
          <div className='previews'>
            {props.data.image && <img className='filmImage' src={props.data.image} alt=''/>}
          </div>
        </Link>}
        {props.data && <p className='tittle'>{props.data.name}</p>}
        {props.data && <p className='year'>{props.data.year}</p>}
        {!props.data && <div className='previews'></div>}
    </div>
  );
};

export default CardFilm;


export const action = async (props) => {
    return redirect('/FilmEdit')
}
