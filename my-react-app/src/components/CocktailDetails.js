import React, { useEffect, useState } from 'react';
import fetchCocktailDetails from './utilis/fetchCocktailDetails';

const CocktailDetails = ({ cocktailId }) => {
  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const details = await fetchCocktailDetails(cocktailId);
      setCocktailDetails(details);
      setIsLoading(false);
    };
    if (cocktailId) {
      fetchDetails();
    } else {
      setCocktailDetails(null);
    }
  }, [cocktailId]);

  if (isLoading) {
    return <div>Loading cocktail details...</div>;
  }

  if (!cocktailDetails) {
    return <div>No cocktail details to display.</div>;
  }

  return (
    <div>
      <h2>{cocktailDetails.strDrink}</h2>
      <img src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} />
      <p>{cocktailDetails.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;
