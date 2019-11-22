import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links nav-container ">
                <h3>Links:</h3>

                <ul className="footer-list">
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

                <h3>Follow Us:</h3>

                <ul className="footer-icons">
                    <li>
                        <a href="https://www.instagram.com/?hl=en">
                            <img
                                src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png"
                                alt="Instagram Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            <img
                                src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook40x40.png"
                                alt="Facebok Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/?lang=en">
                            <img
                                src="https://c866088.ssl.cf3.rackcdn.com/assets/twitter40x40.png"
                                alt="Twitter Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">
                            <img
                                src="https://c866088.ssl.cf3.rackcdn.com/assets/youtube40x40.png"
                                alt="Youtube Icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-copyright">
                <p>&copy; 2019 Arnaud Karambizi</p>
            </div>
        </footer>
    );
}
