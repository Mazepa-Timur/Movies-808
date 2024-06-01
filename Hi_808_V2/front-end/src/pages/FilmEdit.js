import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import './FilmEdit.css';

import Header from '../components/header';

import API_MOVIES from '../components/Database/moviesServis';

const FilmEdit = () => {
  const [films, setFilms] = useState();
  const [isDisabled, setDisabled] = useState(true);
  const classNames = !isDisabled ? 'star' : '';
  const [star, setStar] = useState(0);
  const { theme } = useSelector((state) => state.themeStyle);
  const { isLogin } = useSelector((state) => state.activity);

  const [searchParams] = useSearchParams();
  const filmId = searchParams.get('index');

  const filmsGet = async () => {
    if (!films) {
      const res = await API_MOVIES.foundMovies({ _id: filmId });
      setStar(Math.round(res.rating));
      setFilms({ ...res, rating: res.rating.toFixed(1) });
    }
    if (isLogin === 'user') {
      setDisabled(false);
    }
  };
  if (!films) {
    filmsGet();
  }

  const reting = async (elem) => {
    if (elem.target.value) {
      setStar(Math.round(elem.target.value));
      if (isLogin === 'user') {
        await API_MOVIES.rating({ filmId: filmId, points: elem.target.value });
      }
    }
  };
  return (
    <div className={`filmEdit ${theme}`}>
      <Header />

      {films && (
        <main>
          <div className="header">
            <h2 className="name">{films.name}</h2>
            <img src={films.image} alt="" />
          </div>
          <div className="infoBox">
            <ul className="info">
              <li>
                <p>{'Age rating:'}</p>
                <p>{`+${films.ageRating}`}</p>
              </li>
              <li>
                <p>{'Year:'}</p>
                <p>{films.year}</p>
              </li>
              <li>
                <p>{'Genre:'}</p>
                <p>{films.genre}</p>
              </li>
              <li>
                <p>{'Description:'}</p>
                <p>{films.description}</p>
              </li>
              <li>
                <p>{'Rating:'}</p>
                <p>{`★ ${films.rating} (${films.count})`}</p>
              </li>
            </ul>
            <div className="ratingBox">
              <form onClick={reting} name="formReting" className={'rating'}>
                <input
                  type="radio"
                  id="star-5"
                  name="rating"
                  defaultChecked={star === 5}
                  value="5"
                  disabled={isDisabled}
                />
                <label className={classNames} htmlFor={'star-5'}></label>
                <input
                  type="radio"
                  id="star-4"
                  name="rating"
                  defaultChecked={star === 4}
                  value="4"
                  disabled={isDisabled}
                />
                <label className={classNames} htmlFor={'star-4'}></label>
                <input
                  type="radio"
                  id="star-3"
                  name="rating"
                  defaultChecked={star === 3}
                  value="3"
                  disabled={isDisabled}
                />
                <label className={classNames} htmlFor={'star-3'}></label>
                <input
                  type="radio"
                  id="star-2"
                  name="rating"
                  defaultChecked={star === 2}
                  value="2"
                  disabled={isDisabled}
                />
                <label className={classNames} htmlFor={'star-2'}></label>
                <input
                  type="radio"
                  id="star-1"
                  name="rating"
                  defaultChecked={star === 1}
                  value="1"
                  disabled={isDisabled}
                />
                <label className={classNames} htmlFor={'star-1'}></label>
              </form>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};
export default FilmEdit;
