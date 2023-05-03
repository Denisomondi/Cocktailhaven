import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <NavLink to="/">

                </NavLink>
                <ui className="nav-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/">About</NavLink>
                    </li>
                </ui>
            </div>
        </nav>
    );
};

export default Navbar;