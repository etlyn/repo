import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { ServiceSection } from "../../components/ServiceSection";

import { FeaturesSection } from "../../components/FeaturesSection";
import { Diagonalarrowsicon3 } from "../../icons/Diagonalarrowsicon3";
import { Diagramicon4 } from "../../icons/Diagramicon4";
import { Rocketicon5 } from "../../icons/Rocketicon5";

import { Reviews } from "../../components/Reviews";

import { useNavigate } from "react-router-dom";
import "./style.css";

import { WorkSection } from "../../components/WorkSection";
import { ContactForm } from "../../components/ContactForm";

import { Footer } from "../../components/Footer";
import { Facebookicon1 } from "../../icons/Facebookicon1";
import { Linkedinicon2 } from "../../icons/Linkedinicon2";
import { Locationicon3 } from "../../icons/Locationicon3";
import { Logoicon2 } from "../../icons/Logoicon2";
import { Phoneicon2 } from "../../icons/Phoneicon2";

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
      <Header device={device} />
      <HeroSection
        actionButtonStateWebClassName="design-component-instance-node"
        className="hero-section-instance"
        state={device}
      />
      <ServiceSection device={device} />


      <FeaturesSection
        className="features-section-instance"
        featuresTableTableIcon={
          <Diagramicon4 className="icon-instance-node-3" />
        }
        featuresTableTableIcon1={
          <Rocketicon5 className="icon-instance-node-3" />
        }
        isMob={device === 'mob'}
        override={<Diagonalarrowsicon3 className="icon-instance-node-3" />}
      />

      <Reviews isMob={device === 'mob'} />

      <WorkSection isMob={device === 'mob'} />

      <ContactForm isMob={device === 'mob'} />

      <Footer isMob={device === 'mob'} />
    </div>
  );
};
