/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Shieldicon1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`shieldicon-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M25.3347 16.6588C25.3347 19.8401 22.2237 25.6139 16.0014 27.9999C9.77911 25.6139 6.66797 19.8401 6.66797 16.6588C6.66797 13.4774 6.66797 12.4911 6.66797 7.71915L15.9658 4.4165L25.3347 7.71915C25.3347 12.4911 25.3347 13.4774 25.3347 16.6588Z"
        stroke="#000C25"
        strokeLinecap="square"
        strokeWidth="1.536"
      />
      <path
        className="path"
        d="M11.5273 15.0822L14.8213 18.3762L21.0798 12.1177"
        stroke="#000C25"
        strokeWidth="1.536"
      />
    </svg>
  );
};
