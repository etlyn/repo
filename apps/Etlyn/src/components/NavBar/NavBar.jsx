/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavBarItem } from "../NavBarItem";
import "./style.css";

export const NavBar = ({
  navBarItemText = "Home",
  navBarItemText1 = "Home",
  navBarItemHeadermenuitemClassName,
  navBarItemHeadermenuitemClassNameOverride,
  navBarItemText2 = "Home",
  navBarItemDivClassName,
  navBarItemText3 = "Home",
}) => {
  return (
    <div className="nav-bar">
      <NavBarItem className="nav-bar-item-instance" state="default" text="Home" />
      <NavBarItem state="hover" text={navBarItemText} />
      <NavBarItem
        className="nav-bar-item-instance"
        headermenuitemClassName={navBarItemHeadermenuitemClassName}
        state="active"
        text={navBarItemText1}
      />
      <NavBarItem
        className="nav-bar-item-instance"
        headermenuitemClassName={navBarItemHeadermenuitemClassNameOverride}
        state="default"
        text={navBarItemText2}
      />
      <NavBarItem
        className="nav-bar-item-instance"
        headermenuitemClassName={navBarItemDivClassName}
        state="default"
        text={navBarItemText3}
      />
    </div>
  );
};

NavBar.propTypes = {
  navBarItemText: PropTypes.string,
  navBarItemText1: PropTypes.string,
  navBarItemText2: PropTypes.string,
  navBarItemText3: PropTypes.string,
};
