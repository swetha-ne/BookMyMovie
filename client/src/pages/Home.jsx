import React from "react";
import HeroSection from "../components/HeroSection";
import { FeatherIcon } from "lucide-react";
import FeatureSection from "../components/FeatureSection";
import TrailerSection from "../components/TrailerSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TrailerSection/>
    </>
  );
};

export default Home;
