import React from "react";

const SearchForm = () => {
    const { searchState, setSearchState } = useGlobalContext();
    
    return (
        <section className="section search">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="name">Search for a favorite cocktail</label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setSearchState(e.target.value)}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;