import React, { useEffect } from 'react';
import { AppContext, useGlobalContext } from "./Context";
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { cocktails, setSearchResults, isLoading } = useGlobalContext();

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
        );
        const { drinks } = await response.json();
        setSearchResults(drinks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCocktails();
  }, []);

  if (isLoading) {
    return <div className="loader"></div>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        Sorry, no cocktails matched your search
      </h2>
    );
  }
  return (
    <>
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.idDrink} {...cocktail} />;
        })}
      </div>
    </>
  );
};

export default CocktailList;