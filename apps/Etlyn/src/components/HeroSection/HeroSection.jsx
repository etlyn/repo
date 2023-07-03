import PropTypes from "prop-types";
import React from "react";
import { ActionButton } from "../ActionButton";
import "./style.css";
import { AnimatedText } from "../AnimatedText";
import { motion } from "framer-motion";

export const HeroSection = ({ state, className, actionButtonStateWebClassName }) => {
  return (
    <div className={`hero-section state-1-${state} ${className}`}>
      <div className="headline">
        <div className="normal">
          <AnimatedText containerStyle={{ display: 'flex', flex: 1, gap: 8, flexWrap: (state !== "web" ? 'wrap' : 'nowrap') }} containerClassName="driving" text="Driving" />
          <div className="growth-wrapper">
            <motion.div
              initial={{ paddingRight: 0, marginLeft: "-2px" }}
              animate={{
                width: (state === 'mob' ? '180px' : '248px')
              }}
              transition={{ duration: 1 }}
              style={{
                position: 'absolute',
                height: (state === 'mob' ? '78px' : '112px'),
                width: "0px",
                background: "#0d2a7d"
              }}
            />
            <div className="growth">growth</div>
          </div>
          <div className="with">
            <AnimatedText containerStyle={{ display: 'flex', flex: 1, gap: 8, flexWrap: (state !== "web" ? 'wrap' : 'nowrap') }} containerClassName="width" text="width" />
          </div>
        </div>
        <AnimatedText containerStyle={{ display: 'flex', flex: 1, gap: 8, flexWrap: (state !== "web" ? 'wrap' : 'nowrap') }} containerClassName="strong" text="Expertly crafted digital solutions" />
      </div>
      <motion.div
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
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
      </motion.div>
      <motion.div
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <ActionButton
          className={actionButtonStateWebClassName}
          labelClassName={`${state === "mob" && "class"}`}
          state={state === "mob" ? "mob" : "web"}
        />
      </motion.div>
    </div>
  );
};

HeroSection.propTypes = {
  state: PropTypes.oneOf(["web", "mob"]),
};
