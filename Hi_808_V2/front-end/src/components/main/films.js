import React from 'react';
import './films.css'

import CardFilm from '../Cards/cardFilm.js';

const Films = (props) => {
  return (
    <React.Fragment>
    {!props.films[0] && <p className='itemsNotFound'>Item is not found.</p>}
    {props.films[0] && <div className='filmsBox'>
        {props.films[0] && props.films.map((elem, index)=><CardFilm key={elem._id} data={elem} />)}
    </div>}
    </React.Fragment>
  );
};

export default Films;
