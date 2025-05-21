import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[25px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] md:text-2xl ms:xl font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center my-2">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold px-2">
            <Typewriter
              words={[" BTB", " BTC", " SASS"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <p className="md:text-2xl sm:text-xl font-bold text-gray-500 mt-2 px-5">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <Button
          text={"Get Started"}
          bgColor={"#00df9a"}
          textColor={"black"}
          theme="primary"
        />
      </div>
    </div>
  );
};

export default Hero;
