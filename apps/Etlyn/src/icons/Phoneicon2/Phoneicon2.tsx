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

export const Phoneicon2 = ({ color = "#686D72", className }: Props): JSX.Element => {
  return (
    <svg
      className={`phoneicon-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_922_1727)">
        <path
          className="path"
          clipRule="evenodd"
          d="M0 2.85706C0 2.09929 0.30102 1.37255 0.836838 0.836729C1.37266 0.300902 2.09938 -0.00012207 2.85714 -0.00012207H4.16381C4.98286 -0.00012207 5.69714 0.557982 5.89619 1.35228L6.94857 5.56472C7.03385 5.90568 7.01663 6.26422 6.89905 6.59543C6.78148 6.92664 6.56879 7.21579 6.28762 7.42666L5.05619 8.35048C4.92762 8.44667 4.9 8.58763 4.93619 8.68572C5.47369 10.1475 6.32247 11.475 7.42376 12.5763C8.52504 13.6776 9.85252 14.5264 11.3143 15.0639C11.4124 15.1001 11.5524 15.0725 11.6495 14.9439L12.5733 13.7125C12.7842 13.4313 13.0733 13.2186 13.4045 13.101C13.7358 12.9834 14.0943 12.9662 14.4352 13.0515L18.6476 14.1039C19.4419 14.303 20 15.0172 20 15.8373V17.143C20 17.9008 19.699 18.6275 19.1632 19.1633C18.6273 19.6992 17.9006 20.0002 17.1429 20.0002H15C6.71619 20.0002 0 13.2839 0 4.99995V2.85706Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_922_1727">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Phoneicon2.propTypes = {
  color: PropTypes.string,
};
