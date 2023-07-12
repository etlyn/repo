/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrowicon1 } from "../../icons/Arrowicon1";
import { Envelopeicon3 } from "../../icons/Envelopeicon3";
import { Facebookicon1 } from "../../icons/Facebookicon1";
import { Linkedinicon2 } from "../../icons/Linkedinicon2";
import { Locationicon2 } from "../../icons/Locationicon2";
import { Logoicon } from "../../icons/Logoicon";
import { Logoicon1 } from "../../icons/Logoicon1";
import { Phoneicon2 } from "../../icons/Phoneicon2";
import { Twittericon3 } from "../../icons/Twittericon3";
import "./style.css";

interface Props {
  isMob: boolean;
  className: any;
  icon: JSX.Element;
  override: JSX.Element;
  icon1: JSX.Element;
  icon2: JSX.Element;
  icon3: JSX.Element;
}

export const Footer = ({
  isMob,
  icon = <Phoneicon2 className="instance-node" color="#666D7C" />,
  override = <Locationicon2 className="instance-node" color="#666D7C" />,
  icon1 = <Linkedinicon2 className="instance-node" color="#666D7C" />,
  icon2 = <Facebookicon1 className="instance-node" color="#666D7C" />,
  icon3 = <Logoicon className="logo-icon" />,
}: Props): JSX.Element => {
  return (
    <div className={`footer is-mob-${isMob}`}>
      {!isMob && (
        <div className="div">
          <div className="div-2">
            <div className="text-wrapper">Contact Info</div>
            <div className="contact">
              <div className="item">
                {icon}
                <div className="text-wrapper-2">+1 872 027 3145</div>
              </div>
              <div className="item">
                <Envelopeicon3 className="instance-node" color="#666D7C" />
                <div className="text-wrapper-2">info@etlyn.com</div>
              </div>
              <div className="item">
                {override}
                <p className="element-hampshire-st">
                  1100 Hampshire St, San Francisco, CA 94110, USA
                </p>
              </div>
            </div>
          </div>
          <div className="div-2">
            <div className="text-wrapper">Services</div>
            <div className="services">
              <div className="UX-UI-design">UX/UI Design</div>
              <div className="text-wrapper-3">UX Research</div>
              <div className="text-wrapper-3">UX Audit</div>
              <div className="text-wrapper-3">Hosting</div>
              <div className="text-wrapper-3">Website Development</div>
              <div className="text-wrapper-3">Mobile App Development</div>
            </div>
          </div>
          <div className="subscribe">
            <div className="text-wrapper">Subscribe</div>
            <div className="div-3">
              <p className="join-our-weekly-blog">
                Join our weekly blog about <br />
                creating successful digital products
              </p>
              <div className="input">
                <div className="overlap-group">
                  <div className="your-email-wrapper">
                    <div className="your-email">Your Email</div>
                  </div>
                  <div className="action">
                    <Arrowicon1 className="instance-node" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="socials">
            <div className="stay-connected">Stay connected</div>
            <div className="div-3">
              <div className="item-2">
                {icon1}
                <div className="text-wrapper-4">Linkedin</div>
              </div>
              <div className="item-2">
                <Twittericon3 className="instance-node" color="#666D7C" />
                <div className="twitter">Twitter</div>
              </div>
              <div className="item-2">
                {icon2}
                <div className="text-wrapper-4">Facebook</div>
              </div>
            </div>
          </div>
          <div className="copyrights">
            {icon3}
            <div className="etlyn-cookie">©Etlyn 2023 Cookie preferences</div>
          </div>
        </div>
      )}

      {isMob && (
        <>
          <div className="div-2">
            <div className="text-wrapper">Contact Info</div>
            <div className="div-3">
              <div className="div-4">
                <Phoneicon2 className="instance-node" color="#666D7C" />
                <div className="text-wrapper-5">+1 872 027 3145</div>
              </div>
              <div className="div-4">
                <Envelopeicon3 className="instance-node" color="#666D7C" />
                <div className="text-wrapper-5">info@etlyn.com</div>
              </div>
              <div className="div-4">
                <Locationicon2 className="instance-node" color="#666D7C" />
                <p className="p">
                  1100 Hampshire St, San Francisco, CA 94110, USA
                </p>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="div-2">
              <div className="text-wrapper">Services</div>
              <div className="div-3">
                <div className="text-wrapper-5">UX/UI Design</div>
                <div className="text-wrapper-6">UX Research</div>
                <div className="text-wrapper-6">UX Audit</div>
                <div className="text-wrapper-6">Hosting</div>
                <div className="text-wrapper-6">Website Development</div>
                <div className="text-wrapper-6">Mobile App Development</div>
              </div>
            </div>
            <div className="div-2">
              <div className="stay-connected">Stay connected</div>
              <div className="socials-2">
                <div className="item-2">
                  <Linkedinicon2 className="instance-node" color="#666D7C" />
                  <div className="text-wrapper-4">Linkedin</div>
                </div>
                <div className="item-2">
                  <Twittericon3 className="instance-node" color="#666D7C" />
                  <div className="twitter">Twitter</div>
                </div>
                <div className="item-2">
                  <Facebookicon1 className="instance-node" color="#666D7C" />
                  <div className="text-wrapper-4">Facebook</div>
                </div>
              </div>
            </div>
          </div>
          <div className="subscribe-2">
            <div className="text-wrapper">Subscribe</div>
            <div className="frame-2">
              <p className="join-our-weekly-blog">
                Join our weekly blog about&nbsp;&nbsp;creating successful
                digital products
              </p>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="div-wrapper">
                    <div className="your-email">Your Email</div>
                  </div>
                  <div className="arrow-icon-wrapper">
                    <Arrowicon1 className="instance-node" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-4">
            <Logoicon1 className="logo-icon" />
            <div className="etlyn-cookie">©Etlyn 2023 Cookie preferences</div>
          </div>
        </>
      )}
    </div>
  );
};

Footer.propTypes = {
  isMob: PropTypes.bool,
};
