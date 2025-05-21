import React from "react";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import CardsContainer from "../components/CardsContainer";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#000300] text-[#f8fafc]">
      <Hero />
      <Analytics />
      <Newsletter />
      <CardsContainer />
    </div>
  );
};

export default Home;
