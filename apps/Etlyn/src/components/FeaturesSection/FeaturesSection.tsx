// @ts-nocheck
import PropTypes from "prop-types";
import { Diagonalarrowsicon3 } from "../../icons/Diagonalarrowsicon3";
import { Diagramicon4 } from "../../icons/Diagramicon4";
import { Rocketicon5 } from "../../icons/Rocketicon5";
import { FeaturesTable } from "../FeaturesTable";
import "./style.css";

interface Props {
  isMob: boolean;
  className: any;
  featuresTableTableIcon: JSX.Element;
  override: JSX.Element;
  featuresTableTableIcon1: JSX.Element;
}

export const FeaturesSection = ({
  isMob,
  className,
  featuresTableTableIcon = <Diagramicon4 className="icon-instance-node-2" />,
  override = <Diagonalarrowsicon3 className="icon-instance-node-2" />,
  featuresTableTableIcon1 = <Rocketicon5 className="icon-instance-node-2" />,
}: Props): JSX.Element => {
  return (
    <div className={`features-section is-mob-4-${isMob} ${className}`}>
      <p className="title">Features and infrastructure that grow with you</p>
      <FeaturesTable
        className={`${isMob ? "class-9" : "class-10"}`}
        isMob={isMob ? true : undefined}
        override={featuresTableTableIcon}
        section="enterprise"
        tableIcon={override}
        tableIcon1={featuresTableTableIcon1}
      />
    </div>
  );
};

FeaturesSection.propTypes = {
  isMob: PropTypes.bool,
};
