import React, { useState } from 'react';
import IngredientDetailsID from './IngredientDetailsID';

const SearchCocktailID = () => {
    const [cocktailId, setCocktailId] = useState('');
    const [cocktailDetails, setCocktailDetails] = useState(null);
    const [error, setError] = useState(null);
  
    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
        const data = await response.json();
        if (data.drinks) {
          setCocktailDetails(data.drinks[0]);
          setError(null);
        } else {
          setCocktailDetails(null);
          setError('Cocktail not found.');
        }
        setCocktailId('');
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching the cocktail details.');
      }
    };
  
    const handleInputChange = (e) => {
      setCocktailId(e.target.value);
    };
  
    return (
      <div>
        <h2>Search Cocktail</h2>
        <form className="SearchCocktailID-form" onSubmit={handleSearch}>
          <input
            className="SearchCocktailID-input"
            type="text"
            placeholder="Enter cocktail ID"
            value={cocktailId}
            onChange={handleInputChange}
          />
          <button className="SearchCocktailID-button" type="submit">
            Search
          </button>
        </form>
        {error && <div className="SearchCocktailID-error">{error}</div>}
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
      </div>
    );
  };

  const SearchIngredientID = () => {
    const [ingredientId, setIngredientId] = useState('');
    const [showIngredientDetails, setShowIngredientDetails] = useState(false);
  
    const handleSearch = (e) => {
      e.preventDefault();
      setShowIngredientDetails(true);
    };
  
    const handleInputChange = (e) => {
      setIngredientId(e.target.value);
    };
  
    return (
      <div>
        <h2>Search Ingredient</h2>
        <form className="SearchIngredient-form" onSubmit={handleSearch}>
          <input
            className="SearchIngredient-input"
            type="text"
            placeholder="Enter ingredient ID"
            value={ingredientId}
            onChange={handleInputChange}
          />
          <button className="SearchIngredient-button" type="submit">
            Search
          </button>
        </form>
        {showIngredientDetails && <IngredientDetailsID ingredientId={ingredientId} />}
      </div>
    );
  };

const SearchContainerID = () => {
  return (
    <div>
      <div>
        <SearchCocktailID />
      </div>
      <div>
        <SearchIngredientID />
      </div>
    </div>
  );
};

export default SearchContainerID;
