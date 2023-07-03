import React from "react";
import { Logoicon1 } from "../../icons/Logoicon1";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { ActionContainer } from "../ActionContainer";
import "./style.css";

export const Header = ({ device }) => {
  return (
    <div className="header">
      {device === "web" && (
        <div className="container-web">
          <Logo device="web" />
          <Menu
            device="web"
            navBarNavBarItemText="Career"
            navBarNavBarItemText1="Services"
            navBarNavBarItemText2="Blog"
            navBarNavBarItemText3="About"
          />
          <ActionContainer />
        </div>
      )}

      {device === "mob" && (
        <>
          <div className="container-mob">
            <Logo className="logo-instance" device="mob" icon={<Logoicon1 className="logoicon-1" />} />
          </div>
          <Menu device="mob" />
        </>
      )}
    </div>
  );
};

