import React, { useState } from 'react';
import './filterFilms.css';

import searchSVG from '../../img/search.svg';
import API_MOVIES from '../Database/moviesServis';

const Filter = (props) => {
  const [search, setSearch] = useState('');
  const updateListFilms = async (event) => {
    event.preventDefault();
    const res = await API_MOVIES.foundMovies({ name: search });
    props.setFilms(res);
  };
  const allFilms = async (event) => {
    if (!event.target.value) {
      const res = await API_MOVIES.foundMovies({ name: '' });
      props.setFilms(res);
    }
  };
  return (
    <form className="search" onSubmit={updateListFilms}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        type="text"
        onBlur={allFilms}
      />
      <img onClick={updateListFilms} src={searchSVG} alt="" />
    </form>
  );
};

export default Filter;
