import PropTypes from "prop-types";
import React from "react";
import { ActionButton } from "../ActionButton";
import "./style.css";
import { AnimatedText } from "../AnimatedText";

export const HeroSection = ({ state, className, actionButtonStateWebClassName }) => {
  return (
    <div className={`hero-section state-1-${state} ${className}`}>
      <div className="headline">
        <div className="normal">
          <div className="driving">Driving</div>
          <div className="growth-wrapper">
            <div className="growth">growth</div>
          </div>
          <div className="with">
            {state === "web" && <>with</>}

            {state === "mob" && <> with</>}
          </div>
        </div>
        <AnimatedText containerStyle={{ display: 'flex', flex: 1, gap: 8, flexWrap: (state !== "web" ? 'wrap' : 'nowrap') }} containerClassName="strong" text="Expertly crafted digital solutions" />
      </div>
      <p className="subtitle">
        <span className="span">
          Working hand in hand, our designers, researchers, and developers bring your ideas to life, reimagine products,
          and deliver cutting-edge{" "}
        </span>
        <span className="text-wrapper-2">web</span>
        <span className="span">&nbsp;</span>
        <span className="text-wrapper-2">&amp;</span>
        <span className="span">&nbsp;</span>
        <span className="text-wrapper-2">mobile</span>
        <span className="span"> experiences</span>
      </p>
      <ActionButton
        className={actionButtonStateWebClassName}
        labelClassName={`${state === "mob" && "class"}`}
        state={state === "mob" ? "mob" : "web"}
      />
    </div>
  );
};

HeroSection.propTypes = {
  state: PropTypes.oneOf(["web", "mob"]),
};
