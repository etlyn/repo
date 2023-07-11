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

export const Twittericon3 = ({ color = "#666D7C", className }: Props): JSX.Element => {
  return (
    <svg
      className={`twittericon-3 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20 3.79721C19.2642 4.12388 18.4733 4.34388 17.6433 4.44305C18.4908 3.93555 19.1417 3.13138 19.4475 2.17305C18.655 2.64305 17.7767 2.98471 16.8417 3.16888C16.0942 2.37138 15.0267 1.87305 13.8467 1.87305C11.1975 1.87305 9.25083 4.34471 9.84917 6.91055C6.44 6.73971 3.41667 5.10638 1.3925 2.62388C0.3175 4.46805 0.835 6.88055 2.66167 8.10221C1.99 8.08055 1.35667 7.89638 0.804167 7.58888C0.759167 9.48971 2.12167 11.268 4.095 11.6639C3.5175 11.8205 2.885 11.8572 2.24167 11.7339C2.76333 13.3639 4.27833 14.5497 6.075 14.583C4.35 15.9355 2.17667 16.5397 0 16.283C1.81583 17.4472 3.97333 18.1264 6.29 18.1264C13.9083 18.1264 18.2125 11.6922 17.9525 5.92138C18.7542 5.34221 19.45 4.61971 20 3.79721Z"
        fill={color}
      />
    </svg>
  );
};

Twittericon3.propTypes = {
  color: PropTypes.string,
};
