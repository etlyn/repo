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

export const Locationicon2 = ({ color = "#686D72", className }: Props): JSX.Element => {
  return (
    <svg
      className={`locationicon-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M9.6943 19.8543L9.76344 19.8938L9.7911 19.9096C9.90077 19.9689 10.0235 20 10.1482 20C10.2728 20 10.3955 19.9689 10.5052 19.9096L10.5329 19.8948L10.603 19.8543C10.9893 19.6253 11.3663 19.3808 11.7329 19.1214C12.6822 18.4512 13.5691 17.6969 14.383 16.8674C16.3031 14.9019 18.2973 11.9485 18.2973 8.14876C18.2973 5.98757 17.4388 3.9149 15.9106 2.38672C14.3824 0.858527 12.3098 0 10.1487 0C7.98749 0 5.91485 0.858527 4.38668 2.38672C2.85852 3.9149 2 5.98757 2 8.14876C2 11.9476 3.99518 14.9019 5.91432 16.8674C6.72784 17.6968 7.61444 18.4512 8.56337 19.1214C8.93037 19.3808 9.30765 19.6253 9.6943 19.8543ZM10.1487 11.1119C10.9345 11.1119 11.6882 10.7998 12.2439 10.244C12.7996 9.68834 13.1118 8.93464 13.1118 8.14876C13.1118 7.36287 12.7996 6.60918 12.2439 6.05347C11.6882 5.49777 10.9345 5.18557 10.1487 5.18557C9.36278 5.18557 8.60909 5.49777 8.05339 6.05347C7.49769 6.60918 7.18551 7.36287 7.18551 8.14876C7.18551 8.93464 7.49769 9.68834 8.05339 10.244C8.60909 10.7998 9.36278 11.1119 10.1487 11.1119Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Locationicon2.propTypes = {
  color: PropTypes.string,
};
