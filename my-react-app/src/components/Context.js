import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [searchResults, setSearchResults] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchAllCocktails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        const { drinks } = await response.json();
        setCocktails(drinks || []);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchAllCocktails();
  }, []);

  useEffect(() => {
    const fetchCocktails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        setSearchResults(data.drinks ? data.drinks : []);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
  
    fetchCocktails();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        searchTerm,
        setSearchTerm,
        searchResults,
        cocktails,
        setSearchResults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };