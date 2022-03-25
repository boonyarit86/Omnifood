import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import "./index.scss";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
    </React.Fragment>
  );
}

export default Home;
