/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkicon23 } from "../../icons/Checkicon23";
import "./style.css";

export const FeatureCard = ({ device, className, image = "/img/image-3.png" }) => {
  return (
    <div className={`feature-card device-2-${device} ${className}`}>
      <div className="subheading">
        <div className="website">Website</div>
        <div className="development">Development</div>
      </div>
      <div className="service">
        <img className="image" alt="Image" src={device === "web" ? image : "/img/image-2.png"} />
        <div className="description">
          <p className="at-our-design-agency">
            At our design agency, we offer professional website development services to help you establish a strong
            online presence and enhance your brand&#39;s digital footprint.
          </p>
          <div className="list">
            <div className="list-item">
              <Checkicon23 className="check-icon" />
              <div className="div">Responsive Development</div>
            </div>
            <div className="list-item">
              <Checkicon23 className="check-icon" />
              <div className="e-commerce-solutions">E-commerce Solutions</div>
            </div>
            <div className="list-item">
              <Checkicon23 className="check-icon" />
              <div className="content-management">Content Management Systems (CMS)</div>
            </div>
            <div className="list-item">
              <Checkicon23 className="check-icon" />
              <div className="div">Integration and Third-Party APIs</div>
            </div>
            <div className="list-item">
              <Checkicon23 className="check-icon" />
              <div className="div">Search Engine Optimization (SEO)</div>
            </div>
            <div className="list-item">
              <Checkicon23 className="check-icon" />
              <div className="div">Ongoing Support and Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  device: PropTypes.oneOf(["web", "mob"]),
  image: PropTypes.string,
};
