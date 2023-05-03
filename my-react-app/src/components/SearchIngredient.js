import React, { useState } from "react";
import Cocktail from "./Cocktail";

const SearchIngredient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
    );
    const { drinks } = await response.json();
    setCocktails(drinks || []);
  };

  return (
    <section className="section">
      <h2 className="section-title">Search cocktails by ingredient</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search for a favorite ingredient</label>
          <input
            type="text"
            id="name"
            name="name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.idDrink} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default SearchIngredient;