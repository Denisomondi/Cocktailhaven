import React, { useState } from 'react';

import './App.css'

import Filter from './components/Filter';
import RandomCocktail from './components/RandomCocktail';
import NavBar from './components/Navbar';
import SearchContainer from './components/SearchContainer';

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
          <SearchContainer />
          
          
        </div>
    </div>
  );
}

export default App;
