/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Cylindericon1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`cylindericon-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_941_2488)">
        <path
          className="path"
          d="M23.6798 8.95977C23.6798 10.8227 20.2414 12.1598 15.9998 12.1598C11.7583 12.1598 8.31982 10.8227 8.31982 8.95977C8.31982 7.09682 11.7583 5.75977 15.9998 5.75977C20.2414 5.75977 23.6798 7.09682 23.6798 8.95977Z"
          stroke="#000C25"
          strokeWidth="1.536"
        />
        <path
          className="path"
          d="M23.6798 8.95996V22.4C23.6798 24.396 20.5443 26.24 15.9998 26.24C11.4553 26.24 8.31982 24.396 8.31982 22.4V8.95996"
          stroke="#000C25"
          strokeWidth="1.536"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_941_2488">
          <rect className="rect" fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};
