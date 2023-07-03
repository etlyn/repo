/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FeatureCard } from "../FeatureCard";
import { ServicesMenu } from "../ServicesMenu";
import "./style.css";

export const ServiceSection = ({ device, featureCardImage = "/img/image-3.png" }) => {
  return (
    <div className={`service-section device-12-${device}`}>
      <div className="services">Services</div>
      <ServicesMenu className={`${device === "mob" && "class-5"}`} device={device === "mob" ? "mob" : "web"} />
      <FeatureCard
        className="feature-card-instance"
        device={device === "mob" ? "mob" : "web"}
        image={featureCardImage}
      />
    </div>
  );
};

ServiceSection.propTypes = {
  device: PropTypes.oneOf(["web", "mob"]),
  featureCardImage: PropTypes.string,
};
