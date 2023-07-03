/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logoicon1 } from "../../icons/Logoicon1";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import "./style.css";

export const Header = ({ device, className }) => {
  return (
    <div className={`header device-0-${device} ${className}`}>
      {device === "web" && (
        <div className="container">
          <Logo device="web" />
          <Menu
            device="web"
            navBarNavBarItemDivClassName="menu-2"
            navBarNavBarItemHeadermenuitemClassName="menu-instance"
            navBarNavBarItemHeadermenuitemClassNameOverride="instance-node"
            navBarNavBarItemText="Career"
            navBarNavBarItemText1="Services"
            navBarNavBarItemText2="Blog"
            navBarNavBarItemText3="About"
          />
        </div>
      )}

      {device === "mob" && (
        <>
          <div className="logo-wrapper">
            <Logo className="logo-instance" device="mob" icon={<Logoicon1 className="logoicon-1" />} />
          </div>
          <Menu device="mob" />
        </>
      )}
    </div>
  );
};

Header.propTypes = {
  device: PropTypes.oneOf(["web", "mob"]),
};
