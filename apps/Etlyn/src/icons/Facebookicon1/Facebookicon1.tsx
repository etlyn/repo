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

export const Facebookicon1 = ({ color = "#666D7C", className }: Props): JSX.Element => {
  return (
    <svg
      className={`facebookicon-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_849_856)">
        <path
          className="path"
          clipRule="evenodd"
          d="M10 0.00012207C15.5 0.00012207 20 4.50005 20 9.99997C20 14.9999 16.375 19.2498 11.375 19.9998V12.8749H13.75L14.25 9.99997H11.5V8.125C11.5 7.37501 11.875 6.62502 13.125 6.62502H14.375V4.12506C14.375 4.12506 13.25 3.87506 12.125 3.87506C9.875 3.87506 8.375 5.25004 8.375 7.75V9.99997H5.875V12.8749H8.375V19.8748C3.625 19.1248 0 14.9999 0 9.99997C0 4.50005 4.5 0.00012207 10 0.00012207Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_849_856">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Facebookicon1.propTypes = {
  color: PropTypes.string,
};
