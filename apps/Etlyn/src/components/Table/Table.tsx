import { Clockicon1 } from "../../icons/Clockicon1";
import { Cylindericon1 } from "../../icons/Cylindericon1";
import { Globeicon4 } from "../../icons/Globeicon4";
import { Minusicon7 } from "../../icons/Minusicon7";
import { Plusicon18 } from "../../icons/Plusicon18";
import "./style.css";

interface Props {
  isOpen: boolean;
  isMob: boolean;
  className: any;
  text: string;
  icon: JSX.Element;
  text1: string;
  text2: string;
  override: JSX.Element;
  text3: string;
  text4: string;
  icon1: JSX.Element;
  text5: string;
  text6: string;
  text7: string;
}

export const Table = ({
  isOpen,
  isMob,
  className,
  text = "DATA INTEGRITY",
  icon = <Cylindericon1 className="icon-instance-node" />,
  text1 = "Dedicated infrastructure",
  text2 = "Ensure data integrity with your own dedicated cloud container.",
  override = <Globeicon4 className="icon-instance-node" />,
  text3 = "Custom CDN domains",
  text4 = "Deliver performant edge-cached CDN assets from your own domain.",
  icon1 = <Clockicon1 className="icon-instance-node" />,
  text5 = "Document history",
  text6 = "Access every single document revision. 365+ days. Scrub data anytime to stay compliant.",
  text7 = "SECURE + COMPLIANT",
}: Props): JSX.Element => {
  return (
    <div className={`table is-open-${isOpen} is-mob-${isMob} ${className}`}>
      {!isOpen && (
        <>
          <div className="label">{text7}</div>
          <Plusicon18 className="instance-node" />
        </>
      )}

      {isOpen && (
        <>
          <div className="button">
            <div className="text-wrapper">{text}</div>
            <Minusicon7 className="instance-node" />
          </div>
          <div className="body">
            <div className="description">
              {icon}
              <div className="subtitle">{text1}</div>
              <p className="paragraph">{text2}</p>
            </div>
            <div className="description">
              {override}
              <div className="subtitle">{text3}</div>
              <p className="paragraph">{text4}</p>
            </div>
            <div className="description">
              {icon1}
              <div className="subtitle">{text5}</div>
              <p className="paragraph">{text6}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
