/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Linkedinicon2 = ({ color = "#6F7683", className }: Props): JSX.Element => {
  return (
    <svg
      className={`linkedinicon-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_849_850)">
        <path
          className="path"
          d="M4.50001 19.9994H0.249996V6.6248H4.50001V19.9994ZM2.375 4.74986C1 4.74986 0 3.74989 0 2.37493C0 0.999969 1.125 0 2.375 0C3.75 0 4.75 0.999969 4.75 2.37493C4.75 3.74989 3.75 4.74986 2.375 4.74986ZM20 19.9994H15.75V12.7496C15.75 10.6247 14.875 9.99969 13.625 9.99969C12.375 9.99969 11.125 10.9997 11.125 12.8746V19.9994H6.875V6.6248H10.875V8.49974C11.25 7.62477 12.75 6.24981 14.875 6.24981C17.25 6.24981 19.75 7.62477 19.75 11.7496V19.9994H20Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_849_850">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Linkedinicon2.propTypes = {
  color: PropTypes.string,
};
