// @ts-nocheck

import PropTypes from "prop-types";
import React from "react";
import { BaseInput } from "../BaseInput";
import "./style.css";

interface Props {
  state: "state-5" | "default" | "success" | "focused" | "error";
  className: any;
  text: string;
  baseInputClassName: any;
  inputFieldClassName: any;
}

export const Input = ({
  state,
  className,
  text = "Label",
  baseInputClassName,
  inputFieldClassName,
}: Props): JSX.Element => {
  return (
    <div className={`input ${className}`}>
      {["default", "error", "state-5", "success"].includes(state) && (
        <div className={`div ${baseInputClassName}`}>
          <div className="label-i">{text}</div>
          <div className={`icon-wrapper state-${state} ${inputFieldClassName}`}>
            <div className="icon-2" />
          </div>
          {["error", "success"].includes(state) && (
            <div className={`message state-1-${state}`}>Error Message</div>
          )}
        </div>
      )}

      {state === "focused" && (
        <BaseInput inputFieldClassName="base-input-instance" showIcon={false} />
      )}
    </div>
  );
};

Input.propTypes = {
  state: PropTypes.oneOf(["state-5", "default", "success", "focused", "error"]),
  text: PropTypes.string,
};
