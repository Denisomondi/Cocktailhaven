import React, { useState } from 'react';
import Filter from './components/Filter';
import SearchCocktailID from './components/SearchCocktailID';
import SearchIngredientID from './components/SearchIngredientID';
import RandomCocktail from './components/RandomCocktail';
import NavBar from './components/Navbar';
import SearchForm from './components/SearchForm';
import SearchIngredient from './components/SearchIngredient';
import About from './pages/About';


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
      
      <SearchCocktailID />
      <SearchIngredientID />
      <RandomCocktail />
      <NavBar />
      <SearchForm />
      <SearchIngredient />
      <About />
      
      
    </div>
  );
}

export default App;
