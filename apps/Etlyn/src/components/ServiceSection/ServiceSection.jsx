import React from "react";
import { FeatureCard } from "../FeatureCard";
import { ServicesMenu } from "../ServicesMenu";
import "./style.css";

export const ServiceSection = ({ device }) => {
  return (
    <div className={`service-section device-${device}`}>
      <div className="services">Services</div>
      <ServicesMenu className={`${device === "mob" && "class-5"}`} device={device === "mob" ? "mob" : "web"} />
      <FeatureCard
        className="feature-card-instance"
        device={device === "mob" ? "mob" : "web"}
        image={"https://generation-sessions.s3.amazonaws.com/3337c8ffaf6d89bd28f64fd7631f5157/img/image-4.png"}
      />
    </div>
  );
};