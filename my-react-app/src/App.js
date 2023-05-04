import React, { useState } from 'react';
import Filter from './components/Filter';
import SearchCocktailID from './components/SearchCocktailID';
import SearchIngredientID from './components/SearchIngredientID';
import CocktailDetails from './components/CocktailDetails';
import RandomCocktail from './components/RandomCocktail';
import NavBar from './components/Navbar';

const API_KEY = '1';

function App() {
  const [cocktails, setCocktails] = useState([]);

  return (
    <div>
      <NavBar />
      <div>
      <Filter setCocktails={setCocktails} apiKey={API_KEY} />
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
      </div>
        <div>
          <SearchCocktailID />
          <CocktailDetails />
          <SearchIngredientID />
          <RandomCocktail />
        </div>
    </div>
  );
}

export default App;
