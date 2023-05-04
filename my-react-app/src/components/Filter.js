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
      .then(data => props.setCocktails(data.drinks))
      .catch(error => console.error(error));
  }

  // Get cocktails by category
  function getCocktailsByCategory() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    fetch(url)
      .then(response => response.json())
      .then(data => props.setCocktails(data.drinks))
      .catch(error => console.error(error));
  }

  // Get cocktails by glass
  function getCocktailsByGlass() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${selectedGlass}`;
    fetch(url)
      .then(response => response.json())
      .then(data => props.setCocktails(data.drinks))
      .catch(error => console.error(error));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (selectedAlcoholic) {
      getCocktailsByAlcoholic();
    } else if (selectedCategory) {
      getCocktailsByCategory();
    } else if (selectedGlass) {
      getCocktailsByGlass();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      Alcoholic:
      <select
        value={selectedAlcoholic}
        onChange={event => setSelectedAlcoholic(event.target.value)}
      >
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non Alcoholic">Non Alcoholic</option>
      </select>
      Category:
      <input
        type="text"
        value={selectedCategory}
        onChange={event => setSelectedCategory(event.target.value)}
      />
      Glass:
      <input
        type="text"
        value={selectedGlass}
        onChange={event => setSelectedGlass(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Filter;