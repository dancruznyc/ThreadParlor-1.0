import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Hamburger from "./Hamburger";
import "./Navigation.css";

function Navigation({ sideNavHelper }) {
  const [navActive, setNavActive] = useState("");
  function hamburgerHelper(classN) {
    setNavActive(classN);
  }
  let cartCount = 0;

  return (
    <nav className={`navigation ${navActive}`}>
      <div className="nav-top">
        <div className="nav-top-left"> US | UK | EU</div>
        <div className="nav-cta">FREE shipping on all orders over $150</div>
        <div className="nav-icons">
          <FaSearch onClick={() => console.log("click")} />

          <Link to="login">
            <FaUserAlt />
          </Link>

          <Link to="cart">
            <HiShoppingCart /> <span>{cartCount}</span>
          </Link>
        </div>
      </div>
      <div className="nav-bottom">
        <Hamburger
          navController={hamburgerHelper}
          sideNavController={sideNavHelper}
        />
        <div className="nav-logo">
          <NavLink to="/">Thread Parlor</NavLink>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/lookbook">Lookbook</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news">News</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/locations">Locations</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
