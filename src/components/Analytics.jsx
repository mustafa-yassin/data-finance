import React from "react";
import Laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#f0f4f8] py-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <img
            className="w-[500px] mx-auto my-6 rounded-2xl shadow-2xl border-4 border-[#00df9a]/20 transition-transform duration-300 hover:scale-105"
            src={Laptop}
            alt="Laptop"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <span className="text-[#00df9a] font-semibold">Live Data</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center px-2">
          <p className="text-[#00df9a] font-bold tracking-widest mb-2">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-black md:text-5xl sm:text-4xl text-3xl font-extrabold py-2 leading-tight">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-gray-700 text-lg text-justify md:text-left mb-6">
            Unlock the power of your data with our intuitive dashboard.
            Visualize trends, monitor key metrics, and make informed
            decisions—all in one place. Experience seamless integration and
            real-time analytics designed for modern businesses.
          </p>
          <div className="flex flex-row gap-4">
            <Button
              text={"Get Started"}
              bgColor={"#00df9a"}
              textColor={"black"}
              theme={"primary"}
            />
            <Button
              text={"Learn More"}
              bgColor={"#000300"}
              textColor={"white"}
              theme={"primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
