import React from "react";
import "./SideNavigation.css";

const SideNavigation = ({ sideNavHider }) => {
  return (
    <>
      <div className="side-nav--overlay"></div>
      <div className={`side-nav--container ${sideNavHider}`}>
        <div className="side-nav--content">
          <div className="side-nav--btns">
            <a className="side-nav--login">LOGIN</a>
            <a className="side-nav--currency">USD</a>
            <a className="side-nav--location">US</a>
          </div>
          <ul className="side-nav--menu"></ul>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;
