import React, { useState, useEffect } from 'react';

const IngredientDetailsID = ({ ingredientId }) => {
  const [ingredientDetailsID, setIngredientDetailsID] = useState(null);

  useEffect(() => {
    const fetchIngredientDetailsID = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${ingredientId}`);
      const data = await response.json();
      if (data && data.ingredients && data.ingredients.length > 0) {
        setIngredientDetailsID(data.ingredients[0]);
      }
    };

    fetchIngredientDetailsID();
  }, [ingredientId]);

  if (!ingredientDetailsID) {
    return <p>Loading ingredient details...</p>;
  }

  return (
    <div className="IngredientDetailsID">
      <h2>{ingredientDetailsID.strIngredient}</h2>
      <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredientDetailsID.strIngredient}-Small.png`} alt={ingredientDetailsID.strIngredient} />
      <p>{ingredientDetailsID.strDescription}</p>
      
    </div>
  );
};

export default IngredientDetailsID;
