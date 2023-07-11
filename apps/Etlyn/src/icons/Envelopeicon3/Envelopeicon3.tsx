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

export const Envelopeicon3 = ({ color = "#666D7C", className }: Props): JSX.Element => {
  return (
    <svg
      className={`envelopeicon-3 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M0 6.68542V14.8571C0 15.6148 0.301018 16.3416 0.836834 16.8774C1.37265 17.4132 2.09937 17.7143 2.85713 17.7143H17.1428C17.9005 17.7143 18.6273 17.4132 19.1631 16.8774C19.6989 16.3416 19.9999 15.6148 19.9999 14.8571V6.68542L11.4971 11.917C11.0468 12.194 10.5286 12.3407 9.99995 12.3407C9.47133 12.3407 8.95306 12.194 8.50282 11.917L0 6.68542Z"
        fill={color}
      />
      <path
        className="path"
        d="M19.9999 5.00757V4.85709C19.9999 4.09931 19.6989 3.37257 19.1631 2.83674C18.6273 2.30091 17.9005 1.99988 17.1428 1.99988H2.85713C2.09937 1.99988 1.37265 2.30091 0.836834 2.83674C0.301018 3.37257 0 4.09931 0 4.85709V5.00757L9.25139 10.701C9.47651 10.8396 9.73564 10.9129 9.99995 10.9129C10.2643 10.9129 10.5234 10.8396 10.7485 10.701L19.9999 5.00757Z"
        fill={color}
      />
    </svg>
  );
};

Envelopeicon3.propTypes = {
  color: PropTypes.string,
};
