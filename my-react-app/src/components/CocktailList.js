import React from "react";
import Cocktail from "./Cocktail";

const CocktaiList = () => {
    const { loading, cocktails } = useGlobalContext();

    if (loading) {
        return <Loading />;
    }
    if (cocktails.length < 1) {
        return (
            <h2 className="section-title">
                No Cocktails matched your search criteria
            </h2>
        );
    }

    return (
        <section className="section">
            <h2 className="section-title">Cocktails</h2>
            <div className="cocktail-center">
                {cocktails.map((drink) => {
                    return (
                        <Cocktail drink={drink} key={drink.idDrink}/>
                    );
                })}
            </div>
        </section>
    );
};

export default CocktaiList;