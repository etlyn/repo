/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Arrowicon1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrowicon-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_988_3407)">
        <path
          className="path"
          d="M12.25 2.49976L19.75 9.99976M19.75 9.99976L12.25 17.4998M19.75 9.99976H1.75"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_988_3407">
          <rect className="rect" fill="white" height="20" transform="translate(0.75 -0.000244141)" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
