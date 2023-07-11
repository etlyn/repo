/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Error = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`error ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.99939 5.99999V8.49999M1.79739 10.7507C1.22006 11.7507 1.94206 13 3.09606 13H12.9027C14.0561 13 14.7781 11.7507 14.2014 10.7507L9.29873 2.25199C8.72139 1.25199 7.27739 1.25199 6.70006 2.25199L1.79739 10.7507ZM7.99939 10.5H8.00406V10.5053H7.99939V10.5Z"
        stroke="#F27289"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
