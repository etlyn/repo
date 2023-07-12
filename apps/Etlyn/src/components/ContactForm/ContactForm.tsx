// @ts-nocheck
import PropTypes from "prop-types";
import React from "react";
import { ActionButton } from "../ActionButton";
import { Input } from "../Input";
import "./style.css";

interface Props {
  isMob: boolean;
}

export const ContactForm = ({ isMob }: Props): JSX.Element => {
  return (
    <div className={`contact-form is-mob-${isMob}`}>
      <div className="title">
        <div className="title-2">Grow with us</div>
        <p className="paragraph">
          Help us with a few details and someone from our team will reach out
          shortly.
        </p>
      </div>
      <div className="div-2">
        {!isMob && (
          <>
            <Input
              className="input-instance"
              state="default"
              text="Full Name"
            />
            <Input className="instance-node" state="default" text="Email" />
            <Input className="input-2" state="default" text="Company" />
            <Input className="input-3" state="default" text="Company Size" />
            <Input
              baseInputClassName="input-5"
              className="input-4"
              inputFieldClassName="input-6"
              state="default"
              text="Message"
            />
            <div className="frame">
              <div className="base-input-wrapper">
                <div className="base-input-2">
                  <p className="p">
                    <span className="span">Where did you find us? </span>
                    <span className="text-wrapper-2">(optional)</span>
                  </p>
                  <div className="div-wrapper">
                    <div className={`icon-3 icon-class-name`} />
                  </div>
                </div>
              </div>
              <ActionButton
                className="action-button-instance"
                labelClassName="action-button-2"
                state="web"
                text="Submit"
              />
            </div>
          </>
        )}

        {isMob && (
          <>
            <Input
              baseInputClassName="input-7"
              className="input-7"
              state="default"
              text="Full Name"
            />
            <div className="base-input-3">
              <div className="label-2">Email</div>
              <div className="input-field-2">
                <div className="icon-4" />
              </div>
            </div>
            <div className="base-input-3">
              <div className="label-2">Company</div>
              <div className="input-field-2">
                <div className="icon-4" />
              </div>
            </div>
            <div className="base-input-3">
              <div className="label-2">Company Size</div>
              <div className="input-field-2">
                <div className="icon-4" />
              </div>
            </div>
            <div className="base-input-3">
              <div className="label-2">Company Size</div>
              <div className="input-field-2">
                <div className="icon-4" />
              </div>
            </div>
            <div className="base-input-4">
              <p className="p">
                <span className="span">Where did you find us? </span>
                <span className="text-wrapper-2">(optional)</span>
              </p>
              <div className="input-field-3">
                <div className="icon-4" />
              </div>
            </div>
            <div className="input-8">
              <div className="base-input-3">
                <p className="p">
                  <span className="span">Where did you find us? </span>
                  <span className="text-wrapper-2">(optional)</span>
                </p>
                <div className="div-wrapper">
                  <div className="icon-3" />
                </div>
              </div>
            </div>
            <ActionButton
              className="action-button-3"
              labelClassName="action-button-2"
              state="web"
              text="Submit"
            />
          </>
        )}
      </div>
      <p className="by-submitting-this">
        <span className="text-wrapper-3">
          By submitting this form, you confirm that you have read and understood
          Etlyn’s{" "}
        </span>
        <span className="text-wrapper-4">Privacy Policy</span>
        <span className="text-wrapper-3">
          . This site is protected by reCAPTCHA and the Google{" "}
        </span>
        <span className="text-wrapper-4">Privacy Policy</span>
        <span className="text-wrapper-3"> and </span>
        <span className="text-wrapper-4">Terms of Service</span>
        <span className="text-wrapper-3"> apply.</span>
      </p>
    </div>
  );
};

ContactForm.propTypes = {
  isMob: PropTypes.bool,
};
