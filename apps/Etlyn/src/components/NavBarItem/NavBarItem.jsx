/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavBarItem = ({ state, className, text = "Home", headermenuitemClassName }) => {
  return (
    <div className={`nav-bar-item ${state} ${className}`}>
      <div className={`headermenuitem ${headermenuitemClassName}`}>{text}</div>
    </div>
  );
};

NavBarItem.propTypes = {
  state: PropTypes.oneOf(["hover", "active", "default"]),
  text: PropTypes.string,
};
