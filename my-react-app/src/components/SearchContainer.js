import React, { useState } from 'react';
import IngredientDetailsID from './IngredientDetailsID';

const SearchContainer = () => {
  const [searchType, setSearchType] = useState('cocktail');
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [ingredientDetails, setIngredientDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setCocktailDetails(null);
    setIngredientDetails(null);
    setError(null);
    if (searchType === 'cocktail') {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        if (data.drinks) {
          setCocktailDetails(data.drinks[0]);
        } else {
          setError('Cocktail not found.');
        }
        setSearchTerm('');
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching the cocktail details.');
      }
    } else if (searchType === 'ingredient') {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchTerm}`);
        const data = await response.json();
        if (data.ingredients) {
          setIngredientDetails(data.ingredients[0]);
        } else {
          setError('Ingredient not found.');
        }
        setSearchTerm('');
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching the ingredient details.');
      }
    }
  };
  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="SearchContainer">
      <h2>Search</h2>
      <form className="SearchBar" onSubmit={handleSearch}>
        <select className="SearchBar-select" value={searchType} onChange={handleSearchTypeChange}>
          <option value="cocktail">Cocktail</option>
          <option value="ingredient">Ingredient</option>
        </select>
        <input
          className="SearchBar-input"
          type="text"
          placeholder={`Enter ${searchType} name`}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="SearchBar-button" type="submit">
          Search
        </button>
      </form>
      {error && <div className="Search-error">{error}</div>}
      {cocktailDetails && (
        <div>
          <h2>{cocktailDetails.strDrink}</h2>
          <img className="CocktailDetails-img" src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} />
          <ul className="CocktailDetails-ingredients">
            {Object.keys(cocktailDetails).map((key) => {
              if (key.startsWith('strIngredient') && cocktailDetails[key]) {
                return <li key={key}>{cocktailDetails[key]}</li>;
              }
              return null;
            })}
          </ul>
        </div>
      )}
      {ingredientDetails && <IngredientDetailsID ingredientId={ingredientDetails.idIngredient} />}
    </div>
  );
};

export default SearchContainer;
