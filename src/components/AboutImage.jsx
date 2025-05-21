import React from "react";
import laptopImg from "../assets/laptop.jpg";

const AboutImage = () => (
  <div className="flex justify-center my-8">
    <img
      src={laptopImg}
      alt="DFinance Team at work"
      className="rounded-lg shadow-lg w-full max-w-md border-4 border-[#00df9a]"
    />
  </div>
);

export default AboutImage;
