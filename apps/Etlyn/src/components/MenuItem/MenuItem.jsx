/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ItemActive } from "../ItemActive";
import "./style.css";

export const MenuItem = ({ state, className, itemActiveText = "Website Development" }) => {
  return (
    <div className={`menu-item ${className}`}>
      <ItemActive
        className={`${state === "hover" && "class-3"} ${state === "default" && "class-4"}`}
        text={itemActiveText}
        websiteDevelopmentClassName={`${["default", "hover"].includes(state) && "class-2"}`}
      />
    </div>
  );
};

MenuItem.propTypes = {
  state: PropTypes.oneOf(["default", "active", "hover"]),
  itemActiveText: PropTypes.string,
};
