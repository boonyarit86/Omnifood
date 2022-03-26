import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import "./index.scss";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <Steps />
    </React.Fragment>
  );
}

export default Home;
