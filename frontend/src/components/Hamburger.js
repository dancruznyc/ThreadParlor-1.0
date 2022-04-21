import React, { useState } from "react";
import "./Hamburger.css";

const Hamburger = () => {
  const [hamburgerActive, setHamburgerActive] = useState("");
  function hamburgerClick() {
    if (!hamburgerActive) hamburgerActive = setHamburgerActive("--active");
    else hamburgerActive = setHamburgerActive("");
  }

  return (
    <div className="hamburger-btn" onClick={hamburgerClick}>
      <span className={`hamburger-line hamburger-top${hamburgerActive}`}>
        &nbsp;
      </span>
      <span className={`hamburger-line hamburger-mid${hamburgerActive}`}>
        &nbsp;
      </span>
      <span className={`hamburger-line hamburger-bot${hamburgerActive}`}>
        &nbsp;
      </span>
    </div>
  );
};

export default Hamburger;
