import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './searchEngine.css';
import searchSVG from '../../image/search.svg';

const SearchEngine = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    if (formData.searchValue) {
      setSearchText(formData.searchValue);
      navigate(`/search?name=${formData.searchValue}`);
    }
  };
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          className="searchText"
          name="searchValue"
          value={searchText}
          onChange={handleSearchText}
          placeholder="search name"
          type="text"
        />
        <label className="button" htmlFor="searchSubmit">
          <img src={searchSVG} alt="search" />
          <input type="submit" id="searchSubmit" />
        </label>
      </form>
    </section>
  );
};

export default SearchEngine;
