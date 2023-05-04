import React, { useState } from 'react';

function Filter(props) {
  const [selectedAlcoholic, setSelectedAlcoholic] = useState('Alcoholic');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGlass, setSelectedGlass] = useState('');
  

  

  // Get cocktails by alcoholic
  function getCocktailsByAlcoholic() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${selectedAlcoholic}`;
    fetch(url)
      .then(response => response.json())
      .then(data => props.setCocktails(data.drinks.slice(0, 8))) // limit to 8 results
      .catch(error => console.error(error));
  }
  

  // Get cocktails by category
  function getCocktailsByCategory() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    fetch(url)
      .then(response => response.json())
      .then(data => props.setCocktails(data.drinks.slice(0, 8))) // limit to 8 results
      .catch(error => console.error(error));
  }

  // Get cocktails by glass
  function getCocktailsByGlass() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${selectedGlass}`;
    fetch(url)
      .then(response => response.json())
      .then(data => props.setCocktails(data.drinks.slice(0, 8))) // limit to 8 results
      .catch(error => console.error(error));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (selectedAlcoholic && selectedCategory && selectedGlass) {
      alert('Please fill out only one of the fields: Alcoholic, Category, or Glass.');
    } else if (selectedAlcoholic) {
      getCocktailsByAlcoholic();
    } else if (selectedCategory) {
      getCocktailsByCategory();
    } else if (selectedGlass) {
      getCocktailsByGlass();
    } else {
      alert('Please fill out one of the fields: Alcoholic, Category, or Glass.');
    }

    
  }

  

  

  return (
    <div>
    <form className="filter-form" onSubmit={handleSubmit} >
      <label htmlFor="alcoholic">Alcoholic:</label>
      <select
        id="alcoholic"
        value={selectedAlcoholic}
        onChange={event => setSelectedAlcoholic(event.target.value)}
      >
        <option value="">---</option>
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non_Alcoholic">Non Alcoholic</option>
      </select>
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={event => setSelectedCategory(event.target.value)}
      >
        <option value="">---</option>
        <option value="Ordinary Drink">Ordinary Drink</option>
        <option value="Cocktail">Cocktail</option>
        <option value="Shot">Shot</option>
        <option value="Milk / Float / Shake">Milk / Float / Shake</option>
        <option value="Other/Unknown">Other/Unknown</option>
        <option value="Cocoa">Cocoa</option>
        <option value="Coffee / Tea">Coffee / Tea</option>
        <option value="Homemade Liqueur">Homemade Liqueur</option>
        <option value="Punch / Party Drink">Punch / Party Drink</option>
        <option value="Beer">Beer</option>
        <option value="Soft Drink / Soda">Soft Drink / Soda</option>
      </select>
      <label htmlFor="glass">Glass:</label>
      <select
        id="glass"
        value={selectedGlass}
        onChange={event => setSelectedGlass(event.target.value)}
      >
        <option value="">---</option>
        <option value="Old Fashioned Glass">Old Fashioned Glass</option>
        <option value="Cocktail Glass">Cocktail Glass</option>
        <option value="Highball Glass">Highball Glass</option>
        <option value="Collins Glass">Collins Glass</option>
        <option value="Shot Glass">Shot Glass</option>
        <option value="Beer Glass">Beer Glass</option>
        <option value="Martini Glass">Martini Glass</option>
        <option value="Margarita Glass">Margarita Glass</option>
        <option value="Punch Bowl">Punch Bowl</option>
        <option value="Pitcher">Pitcher</option>
        <option value="Irish Coffee Cup">Irish Coffee Cup</option>
        <option value="Brandy Snifer">Brandy Snifer</option>
        <option value="Wine Glass">Wine Glass</option>
        <option value="White Wine Glass">White Wine Glass</option>
        <option value="Pint Glass">Pint Glass</option>
      </select>
      <button type="submit">Submit</button>
    </form>

    <div className="cocktail-list">
        {props.cocktails && props.cocktails.map(cocktail => (
          <div key={cocktail.idDrink} className="cocktail">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
            <p>{cocktail.strInstructions}</p>
          </div>
        ))}
      </div>
    

  
    </div>
  );
  
}

export default Filter;