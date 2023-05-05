// Removed from App.js
import React, { useState } from 'react';
import Cocktail from './Cocktail';

const SearchIngredient = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
    );
    const { drinks } = await response.json();
    setCocktails(drinks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search cocktails by ingredient:
          <input
            type="text"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <h2>Cocktails</h2>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchIngredient;