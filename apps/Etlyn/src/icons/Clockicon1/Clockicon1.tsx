/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Clockicon1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`clockicon-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_941_2253)">
        <path className="path" d="M16 10.2399V15.9999L19.84 19.8399" stroke="#000C25" strokeWidth="1.536" />
        <path
          className="path"
          d="M15.9998 26.2398C21.6552 26.2398 26.2398 21.6552 26.2398 15.9998C26.2398 10.3444 21.6552 5.75983 15.9998 5.75983C10.3444 5.75983 5.75977 10.3444 5.75977 15.9998C5.75977 21.6552 10.3444 26.2398 15.9998 26.2398Z"
          stroke="#000C25"
          strokeWidth="1.536"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_941_2253">
          <rect className="rect" fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};
