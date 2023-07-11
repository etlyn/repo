// @ts-nocheck
import PropTypes from "prop-types";
import React from "react";
import { Clockicon1 } from "../../icons/Clockicon1";
import { Communityicon1 } from "../../icons/Communityicon1";
import { Cylindericon1 } from "../../icons/Cylindericon1";
import { Diagonalarrowsicon3 } from "../../icons/Diagonalarrowsicon3";
import { Diagramicon4 } from "../../icons/Diagramicon4";
import { Globeicon4 } from "../../icons/Globeicon4";
import { Rocketicon5 } from "../../icons/Rocketicon5";
import { Shieldicon1 } from "../../icons/Shieldicon1";
import { Verificationicon } from "../../icons/Verificationicon";
import { Table } from "../Table";
import "./style.css";

interface Props {
  section: "secure" | "enterprise" | "data";
  isMob: boolean;
  className: any;
  tableIcon: JSX.Element;
  override: JSX.Element;
  tableIcon1: JSX.Element;
}

export const FeaturesTable = ({
  section,
  isMob,
  className,
  tableIcon = <Diagonalarrowsicon3 className="instance-node-2" />,
  override = <Diagramicon4 className="instance-node-2" />,
  tableIcon1 = <Rocketicon5 className="instance-node-2" />,
}: Props): JSX.Element => {
  return (
    <div className={`features-table ${section} is-mob-2-${isMob} ${className}`}>
      {["data", "enterprise"].includes(section) && (
        <div className="overlap-group">
          <Table
            className={`${section === "data" ? "class" : "class-2"}`}
            icon={tableIcon}
            icon1={override}
            isMob={isMob ? true : undefined}
            isOpen={section === "data" ? false : true}
            override={tableIcon1}
            text1={section === "enterprise" ? "ENTERPRISE READY" : undefined}
            text={section === "enterprise" ? "Scalable" : undefined}
            text={
              section === "enterprise" ? (
                <>
                  Our global cloud platform and
                  <br />
                  flexible data modeling provide
                  <br />
                  seamless pathways from
                  <br />
                  prototype to production.
                </>
              ) : undefined
            }
            text={section === "enterprise" ? "Performant" : undefined}
            text={
              section === "enterprise"
                ? "Real-time APIs and collaboration features. Global CDN. Edge-cached requests available at a nearby location."
                : undefined
            }
            text={section === "enterprise" ? "Growth support" : undefined}
            text={
              section === "enterprise"
                ? "Get what you need when you need it. Dedicated support specialists. Your own Slack channel. Regular check-ins."
                : undefined
            }
            text={section === "data" ? "ENTERPRISE READY" : undefined}
          />
          <Table
            className={`${
              section === "data"
                ? "class-3"
                : section === "enterprise" && isMob
                ? "class-4"
                : "class-5"
            }`}
            isMob={isMob ? true : undefined}
            isOpen={false}
            text7="SECURE + COMPLIANT"
          />
          <Table
            className={`${
              section === "data"
                ? "class-6"
                : section === "enterprise" && isMob
                ? "class-7"
                : "class-8"
            }`}
            icon1={
              section === "data" ? (
                <Cylindericon1 className="instance-node-2" />
              ) : undefined
            }
            icon={
              section === "data" ? (
                <Clockicon1 className="instance-node-2" />
              ) : undefined
            }
            isMob={isMob ? true : undefined}
            isOpen={section === "data" ? true : undefined}
            override={
              section === "data" ? (
                <Globeicon4 className="instance-node-2" />
              ) : undefined
            }
            text1={section === "data" ? "DATA INTEGRITY" : undefined}
            text={section === "data" ? "Dedicated infrastructure" : undefined}
            text={
              section === "data"
                ? "Ensure data integrity with your own dedicated cloud container."
                : undefined
            }
            text={section === "data" ? "Custom CDN domains" : undefined}
            text={
              section === "data"
                ? "Deliver performant edge-cached CDN assets from your own domain."
                : undefined
            }
            text={section === "data" ? "Document history" : undefined}
            text={
              section === "data"
                ? "Access every single document revision. 365+ days. Scrub data anytime to stay compliant."
                : undefined
            }
            text={section === "enterprise" ? "DATA INTEGRITY" : undefined}
          />
        </div>
      )}

      {section === "secure" && (
        <>
          <Table
            className="table-instance"
            isMob={isMob ? true : undefined}
            isOpen={false}
            text7="ENTERPRISE READY"
          />
          <Table
            icon={<Shieldicon1 className="instance-node-2" />}
            icon1={<Verificationicon className="instance-node-2" />}
            isMob={isMob ? true : undefined}
            isOpen
            override={<Communityicon1 className="instance-node-2" />}
            text="SECURE + COMPLIANT"
            text1="Dedicated infrastructure"
            text2="SOC 2, GDPR, &amp; CCPA compliant platform. 24/7/365 monitoring. +99.9% uptime. Hosted on industry-leading infrastructure."
            text3="Custom access control"
            text4="Build tailored access groups. User groups are stored as regular dataset documents and can be optimized as you go."
            text5="SSO"
            text6="Integrate a 3P Authentication provider or build your own custom solution, with included project and user mapping based on declarative rules."
          />
          <Table
            className="table-2"
            isMob={isMob ? true : undefined}
            isOpen={false}
            text7="DATA INTEGRITY"
          />
        </>
      )}
    </div>
  );
};

FeaturesTable.propTypes = {
  section: PropTypes.oneOf(["secure", "enterprise", "data"]),
  isMob: PropTypes.bool,
};
