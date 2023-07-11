// @ts-nocheck

import PropTypes from "prop-types";
import React, { ReactNode } from "react";
import "./style.css";

interface Props {
  image: string;
  text: string;
  text1: string | ReactNode;
  text2: string | ReactNode;
  hasAction: boolean;
  occupationClassName: any;
  className: any;
}

export const ReviewCard = ({
  image = "https://generation-sessions.s3.amazonaws.com/56d13f1491cdc16344f770af03add974/img/image-12@2x.png",
  text = "Bettina Donmez",
  text1 = "E-Commerce Platform Development<br/>PUMA",
  text2 = "We use Etlyn in every single one of our projects that requires content management. Our clients love it. Over the years we found out it covers so many use cases, be it a simple website, a web app, e-commerce or mobile app. It is easy and intuitive to use, makes content management enjoyable, and empowers marketers to work without constant involvement of designers and developers.",
  hasAction = true,
  occupationClassName,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`review-card ${className}`}>
      <div className="user">
        <img className="image" alt="Image" src={image} />
        <div className="person-details">
          <div className="name">{text}</div>
          <div className={`occupation ${occupationClassName}`}>{text1}</div>
        </div>
      </div>
      <p className="review">{text2}</p>
      {hasAction && <div className="action">LEARN MORE</div>}
    </div>
  );
};

ReviewCard.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasAction: PropTypes.bool,
};
