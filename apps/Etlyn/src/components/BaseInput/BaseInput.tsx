// @ts-nocheck
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  showIcon: boolean;
  showMessage: boolean;
  inputFieldClassName: any;
}

export const BaseInput = ({
  showIcon = true,
  showMessage,
  inputFieldClassName,
}: Props): JSX.Element => {
  return (
    <div className="base-input">
      <div className="label">Label</div>
      <div className={`input-field ${inputFieldClassName}`}>
        {showIcon && <div className="icon" />}
      </div>
    </div>
  );
};

BaseInput.propTypes = {
  showIcon: PropTypes.bool,
  showMessage: PropTypes.bool,
};
