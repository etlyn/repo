import React from "react";
import "./style.css";
import { AnimatedText } from "../../components/AnimatedText";
import { Logo } from "../../components/Logo";

export default function IntroPage() {
  return (
    <div className="wrapper">
      <Logo className={{}} />
      <AnimatedText text="We're upgrading website!" />
    </div>
  );
}
