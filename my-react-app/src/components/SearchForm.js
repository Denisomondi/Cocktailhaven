import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
    const { setSearchState } = useGlobalContext();

    const searchCocktails = async (e) => {
        e.preventDefault();
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const { drinks } = await response.json();
        setSearchResults(drinks);
      };  
    
  return (
        <section className="section search">
          <form onSubmit={searchCocktails} className="search-form">
            <div className="form-control">
              <label htmlFor="name">Search for a favorite cocktail</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </section>
      );
    };
    
export default SearchForm;