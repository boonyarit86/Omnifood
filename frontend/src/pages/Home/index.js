import React from "react";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Meals from "./components/Meals";
import Pricing from "./components/Pricing";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import "./index.scss";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <Steps />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
    </React.Fragment>
  );
}

export default Home;
