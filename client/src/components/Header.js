import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="header">
            <nav className="header-nav nav-container">
                <ul className="header-nav-list">
                    <li>
                        <NavLink to="/" exact activeClassName="selected">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="selected">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="selected">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <form className="header-search" onSubmit={props.onSubmit}>
                    <input
                        type="search"
                        placeholder="Search..."
                        name="search"
                        className="header-search-bar"
                        onChange={props.searchOnChange}
                    />
                    {/* <input
                        type="submit"
                        value="search"
                        className="header-button"
                    /> */}
                    <button className="header-button" onClick={props.onSubmit}>
                        submit
                    </button>
                </form>
            </nav>
        </header>
    );
}
