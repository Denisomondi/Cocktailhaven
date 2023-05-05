import React, { useState } from 'react';

import './App.css'

import Filter from './components/Filter';
import SearchCocktailID from './components/SearchCocktailID';
import SearchIngredientID from './components/SearchIngredientID';
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
        <ul className="cocktail-grid">
          {cocktails.map(cocktail => (
            <li key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              {cocktail.strDrink}
            </li>
    ))}
  </ul>
</div>

        <div>
          <RandomCocktail />
          <SearchCocktailID />
          <SearchIngredientID />
          
        </div>
    </div>
  );
}

export default App;
