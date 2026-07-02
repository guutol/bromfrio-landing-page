import React from "react";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Differentials from "./Differentials";
import HomeServices from "./HomeServices";
import ResidentialCommercial from "./ResidentialCommercial";
import BrandsStrip from "./BrandsStrip";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Bomfrio | Assistência Técnica em Refrigeração");

  return (
    <>
      <Hero />
      <TrustBar />
      <Differentials />
      <HomeServices />
      <ResidentialCommercial />
      <BrandsStrip />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Home;
