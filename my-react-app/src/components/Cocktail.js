import React from "react";
import { NavLink } from "react-router-dom";

const Cocktail = ({ drink }) => {
    return !drink ? (
      <article className="cocktail">
        <h3>No Drink to Display</h3>
      </article>
    ) : (
        <article className="cocktail" key={drink.idDrink}>
            <div className="img-container">
            <img src={drink?.strDrinkThumb} alt={drink?.strGlass} />
            </div>
            <div className="cocktail-footer">
                <h3>{drink.strDrink}</h3>
                <h4>{drink.strGlass}</h4>
                <p>{drink.strAlcoholic}</p>
                <NavLink
                   className="btn btn-primary btn-details"
                     to={`/cocktail/${drink.idDrink}`}
                      element={""}
                       >Details
                </NavLink>
            </div>
        </article>
    );
};

export default  Cocktail;