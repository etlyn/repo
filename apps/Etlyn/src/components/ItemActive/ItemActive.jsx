/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ItemActive = ({ className, websiteDevelopmentClassName, text = "Website Development" }) => {
  return (
    <div className={`item-active ${className}`}>
      <div className={`website-development ${websiteDevelopmentClassName}`}>{text}</div>
    </div>
  );
};

ItemActive.propTypes = {
  text: PropTypes.string,
};
