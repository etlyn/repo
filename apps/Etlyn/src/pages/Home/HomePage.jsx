import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { ServiceSection } from "../../components/ServiceSection";

import { useNavigate } from "react-router-dom";
import "./style.css";

export const HomePage = () => {
  const [device, setDevice] = useState('web')
  const navigate = useNavigate();

  // TODO: Remove this to make responsive work.
  // Work-around to now show UI on mobile while working on responsive design
  useEffect(() => {
    if (window.screen.width < 768) {
      setDevice('mob')
      // navigate("/");
    }
  }, []);
  return (
    <div className="home-page">
      <Header className="header-instance" device="web" />
      <HeroSection
        actionButtonStateWebClassName="design-component-instance-node"
        className="hero-section-instance"
        state="web"
      />
      <ServiceSection
        device="web"
        featureCardImage="https://generation-sessions.s3.amazonaws.com/3337c8ffaf6d89bd28f64fd7631f5157/img/image-4.png"
      />
    </div>
  );
};
