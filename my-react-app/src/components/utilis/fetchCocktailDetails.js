const fetchCocktailDetails = async (id) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data.drinks[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  export default fetchCocktailDetails;
  