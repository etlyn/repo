import React from "react";
import "./style.css";
import { AnimatedText } from "../../components/AnimatedText";
import { Logo } from "../../components/Logo";

export default function IntroPage() {
  return (
    <div className="wrapper">
      <Logo className={{}} />
      <AnimatedText
        text="We're upgrading website!"
        textStyle={{ marginRight: "5px", fontSize: 16, color: "#0D2B7E" }}
      />
    </div>
  );
}
