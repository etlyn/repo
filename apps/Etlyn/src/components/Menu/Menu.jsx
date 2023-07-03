/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menuicon1 } from "../../icons/Menuicon1";
import { ActionContainer } from "../ActionContainer";
import { NavBar } from "../NavBar";
import "./style.css";

export const Menu = ({
  device,
  navBarNavBarItemText = "Home",
  navBarNavBarItemText1 = "Home",
  navBarNavBarItemText2 = "Home",
  navBarNavBarItemText3 = "Home",
}) => {
  return (
    <div className={`menu device-${device}`}>
      {device === "web" && (
        <NavBar
          navBarItemText={navBarNavBarItemText1}
          navBarItemText1={navBarNavBarItemText3}
          navBarItemText2={navBarNavBarItemText2}
          navBarItemText3={navBarNavBarItemText}
        />
      )}

      {device === "mob" && <Menuicon1 className="menu-icon" />}
    </div>
  );
};

Menu.propTypes = {
  device: PropTypes.oneOf(["web", "mob"]),
  navBarNavBarItemText: PropTypes.string,
  navBarNavBarItemText1: PropTypes.string,
  navBarNavBarItemText2: PropTypes.string,
  navBarNavBarItemText3: PropTypes.string,
};
