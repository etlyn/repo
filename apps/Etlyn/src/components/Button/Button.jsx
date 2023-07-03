/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ style }) => {
  return (
    <div className={`button style-${style}`}>
      <div className="label">
        {["default", "outline"].includes(style) && <>Contact Sales</>}

        {style === "link" && <>Log In</>}
      </div>
    </div>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["link", "outline", "default"]),
};
