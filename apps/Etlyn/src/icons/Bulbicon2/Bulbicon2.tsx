/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Bulbicon2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`bulbicon-2 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20.0001 21.9462C20.0001 20.4884 20.4622 19.0737 21.3091 17.8871C22.6793 15.967 23.5295 14.5034 23.5295 11.7646C23.5295 7.52937 20.0001 4 15.7648 4C11.5295 4 8.00012 7.52937 8.00012 11.7646C8.00012 14.5034 8.85023 15.967 10.2206 17.8871C11.0674 19.0737 11.5295 20.4884 11.5295 21.9462V23.7645C11.5295 24.5442 12.1616 25.1762 12.9413 25.1762H18.5883C19.368 25.1762 20.0001 24.5442 20.0001 23.7645V21.9462Z"
        stroke="#000C25"
        strokeWidth="1.5"
      />
      <path className="path" d="M11.5297 20.9409H20.0002" stroke="#000C25" strokeWidth="1.5" />
      <path
        className="path"
        d="M13.6472 25.8823V26.5882C13.6472 27.3679 14.2793 27.9999 15.059 27.9999H16.4707C17.2505 27.9999 17.8825 27.3679 17.8825 26.5882V25.8823"
        stroke="#000C25"
        strokeWidth="1.5"
      />
    </svg>
  );
};
