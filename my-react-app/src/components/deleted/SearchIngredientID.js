import React, { useState } from 'react';
import IngredientDetailsID from './IngredientDetailsID';

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

export default SearchIngredientID;
