/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Logoicon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`logoicon ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#0D2B7E" height="18" rx="2.48275" width="17.9999" y="0.00012207" />
      <path
        className="path"
        d="M11.364 13.8426C13.5755 13.1936 15.1874 11.0176 15.1874 8.63662C15.1874 5.73078 12.7865 3.37512 9.82478 3.37512C7.12132 3.37512 4.8851 5.33792 4.51571 7.89031H6.36989C6.67346 6.17073 8.12137 4.86775 9.86177 4.86775C11.8226 4.86775 13.4122 6.52172 13.4122 8.56199C13.4122 10.6023 11.6859 12.2539 9.82478 12.4393C9.44713 12.458 9.09198 12.458 8.72214 12.458H5.96919C6.03646 12.5346 5.8976 12.3853 5.96919 12.458H5.03348V14.0625H8.75032C9.12015 14.0625 9.44578 14.0625 9.82478 14.0625C10.216 14.0625 10.5974 14.0214 10.9648 13.9434C11.1049 13.9293 11.2389 13.8947 11.364 13.8426Z"
        fill="white"
      />
      <path className="path" d="M3.375 10.4453H8.58967V11.9251H3.375V10.4453Z" fill="white" />
      <path className="path" d="M4.51571 8.38999H7.93784V9.86979H4.51571V8.38999Z" fill="white" />
    </svg>
  );
};
