import React from "react";
import Hamburger from "./Hamburger";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-top">
        <div> US | UK | EU</div>
        <div className="nav-cta">FREE shipping on all orders over $150</div>
        <div className="nav-icons"></div>
      </div>
      <div className="nav-bottom">
        <Hamburger />
        <div className="nav-logo">Thread Parlor</div>
        <ul className="nav-list">
          <li className="nav-item">Shop</li>
          <li className="nav-item">LookBook</li>
          <li className="nav-item">News</li>
          <li className="nav-item">Stockists</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
