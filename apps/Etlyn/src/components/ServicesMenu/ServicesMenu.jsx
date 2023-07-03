/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MenuItem } from "../MenuItem";
import "./style.css";

export const ServicesMenu = ({ device, className }) => {
  return (
    <div className={`services-menu device-1-${device} ${className}`}>
      <MenuItem className="menu-item-instance" itemActiveText="UX/UI Design" state="default" />
      <MenuItem className="menu-item-instance" itemActiveText="SEO" state="hover" />
      <MenuItem className="menu-item-instance" itemActiveText="Website Development" state="active" />
      <MenuItem className="menu-item-instance" itemActiveText="Mobile App" state="default" />
      <MenuItem className="menu-item-instance" itemActiveText="Research" state="default" />
      <MenuItem className="menu-item-instance" itemActiveText="Social Media" state="default" />
    </div>
  );
};

ServicesMenu.propTypes = {
  device: PropTypes.oneOf(["web", "mob"]),
};
