import React from "react";
import avatar from "../images/avatar.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact>
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact>
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>@2021, Lorem ipsum</p>
                </footer>
            </nav>
        </div>
    );
};

export default Navbar;
