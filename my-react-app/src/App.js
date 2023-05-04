import React, { useState } from 'react';
import Filter from './components/Filter';
import SearchCocktailID from './components/SearchCocktailID';
import SearchIngredientID from './components/SearchIngredientID';
import CocktailDetails from './components/CocktailDetails';
import RandomCocktail from './components/RandomCocktail';
import CocktailList from './components/CocktailList';
import NavBar from './components/Navbar';
import SearchForm from './components/SearchForm';
import SearchIngredient from './components/SearchIngredient';


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
      <CocktailDetails />
      <SearchIngredientID />
      <RandomCocktail />
      <CocktailList />
      <NavBar />
      <SearchForm />
      <SearchIngredient />
      
      
    </div>
  );
}

export default App;
