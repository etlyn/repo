/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ActionButton = ({ state, className, labelClassName }) => {
  return (
    <div className={`action-button state-${state} ${className}`}>
      <div className={`text-wrapper ${labelClassName}`}>Get a Quote</div>
    </div>
  );
};

ActionButton.propTypes = {
  state: PropTypes.oneOf(["web", "mob"]),
};
