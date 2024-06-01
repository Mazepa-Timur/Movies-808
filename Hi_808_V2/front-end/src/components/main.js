import React, {useState} from 'react';
import './main.css'

import Filter from './main/filterFilms.js';
import Films from './main/films.js';
import API_MOVIES from './Database/moviesServis.js';

const Main = () => {
  const [films, setFilms] = useState(['']);
  const filmsGet = async () => {
    if (films[0] === '') {
      const res = await API_MOVIES.foundMovies({name: ''});
      setFilms(res);
    }
  }
  filmsGet();
  return (
    <main className='main'>
        <Filter setFilms={setFilms}/>
        <Films films={films}/>
    </main>
  );
};

export default Main;
