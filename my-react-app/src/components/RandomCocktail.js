import React, { useState, useEffect } from 'react';

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    const fetchRandomCocktail = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRandomCocktail(data.drinks[0]);
    };

    fetchRandomCocktail();
  }, []);

  if (!randomCocktail) {
    return <p>Loading random cocktail...</p>;
  }

  return (
    <div className="RandomCocktail">
      <h2>{randomCocktail.strDrink}</h2>
      <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
      <p>{randomCocktail.strInstructions}</p>
      <ul>
        {Object.keys(randomCocktail).map((key) => {
          if (key.startsWith('strIngredient') && randomCocktail[key]) {
            return <li key={key}>{randomCocktail[key]}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default RandomCocktail;
