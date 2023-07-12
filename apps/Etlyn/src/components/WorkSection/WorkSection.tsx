import React from "react";
import { Arrowpathicon2 } from "../../icons/Arrowpathicon2";
import { Bulbicon2 } from "../../icons/Bulbicon2";
import { Penicon2 } from "../../icons/Penicon2";
import "./style.css";

interface Props {
  isMob: boolean;
}

export const WorkSection = ({ isMob }: Props): JSX.Element => {
  return (
    <div className={`work is-mob-${isMob}`}>
      <div className="title">How we work</div>
      <div className="body">
        {!isMob && (
          <>
            <div className="description">
              <Arrowpathicon2 className="instance-node" />
              <div className="subtitle">Testing and Launch</div>
              <p className="paragraph">
                In the Testing and Launch phase, we conduct rigorous quality
                assurance checks to ensure the website performs flawlessly
                across browsers, platforms, and devices. After addressing any
                issues, we collaborate with you for final content review before
                preparing for a smooth transition to the live environment,
                followed by post-launch support for continued website
                performance.
              </p>
            </div>
            <div className="div">
              <Penicon2 className="instance-node" />
              <div className="subtitle">Design and Development</div>
              <p className="paragraph">
                our skilled designers create a visually appealing and
                user-friendly interface that reflects your brand.
                Simultaneously, our developers bring the designs to life by
                coding the website, integrating necessary functionalities, and
                ensuring a seamless user experience.
              </p>
            </div>
            <div className="description-2">
              <Bulbicon2 className="instance-node" />
              <div className="subtitle">Discovery and Planning</div>
              <p className="paragraph">
                We gather detailed information about your goals, target
                audience, and business requirements. This enables us to create a
                strategic roadmap for your website, aligning it with your vision
                and industry trends.
              </p>
            </div>
            <div className="arrow-illustration">
              <div className="overlap-group">
                <div className="pseudo" />
                <div className="pseudo-2" />
                <div className="pseudo-3" />
                <div className="pseudo-4" />
                <div className="pseudo-5" />
              </div>
            </div>
          </>
        )}

        {isMob && (
          <>
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="pseudo-6" />
                <div className="pseudo-7" />
                <div className="pseudo-8" />
                <div className="group">
                  <div className="overlap-group-2">
                    <div className="pseudo-9" />
                    <div className="pseudo-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="descriptions">
              <div className="description-3">
                <Bulbicon2 className="instance-node" />
                <div className="subtitle">Discovery and Planning</div>
                <p className="paragraph">
                  We gather detailed information about your goals, target
                  audience, and business requirements. This enables us to create
                  a strategic roadmap for your website, aligning it with your
                  vision and industry trends.
                </p>
              </div>
              <div className="description-3">
                <Penicon2 className="instance-node" />
                <div className="subtitle">Design and Development</div>
                <p className="paragraph">
                  our skilled designers create a visually appealing and
                  user-friendly interface that reflects your brand.
                  Simultaneously, our developers bring the designs to life by
                  coding the website, integrating necessary functionalities, and
                  ensuring a seamless user experience.
                </p>
              </div>
              <div className="description-3">
                <Arrowpathicon2 className="instance-node" />
                <div className="subtitle">Testing and Launch</div>
                <p className="paragraph">
                  In the Testing and Launch phase, we conduct rigorous quality
                  assurance checks to ensure the website performs flawlessly
                  across browsers, platforms, and devices. After addressing any
                  issues, we collaborate with you for final content review
                  before preparing for a smooth transition to the live
                  environment, followed by post-launch support for continued
                  website performance.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
