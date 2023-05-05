// Removed from App.js
import React from 'react';
import { useGlobalContext } from './Context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchCocktails = async e => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if (!searchTerm) return;
    setSearchTerm(searchTerm);
  };

  return (
    <form className="search-form" onSubmit={searchCocktails}>
      <input type="text" id="search" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;