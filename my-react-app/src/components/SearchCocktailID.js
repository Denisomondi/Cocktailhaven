import React, { useState } from 'react';

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

export default SearchCocktailID;
