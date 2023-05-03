import React, { useState } from 'react';
import Filter from './Filter';
import RandomCocktail from './components/RandomCocktail';

const API_KEY = '1';

function App() {
  const [cocktails, setCocktails] = useState([]);

  return (
    <div>
      <Filter setCocktails={setCocktails} apiKey={API_KEY} />
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
      <RandomCocktail />
    </div>
  );
}

export default App;
