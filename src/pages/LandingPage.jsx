import React from "react";
import { Footer, Header, Hero } from "../components";

const LandingPage = () => {
  return (
    <div className="relative">
      <Header status="home" />
      <Hero />
      <Footer />
    </div>
  );
};

export default LandingPage;
