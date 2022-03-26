import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Meals from "./components/Meals";
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
    </React.Fragment>
  );
}

export default Home;
