import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-[#232526] to-[#414345] text-white px-4">
      <div className="max-w-[1240px] mx-auto md:px-8 grid lg:grid-cols-3 items-center rounded-xl shadow-2xl bg-white/10 backdrop-blur-md">
        <div className="lg:col-span-2 p-6">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-extrabold py-2 drop-shadow-lg">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-lg text-gray-200 mb-2">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-6 lg:ml-2 p-6">
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              className="p-3 w-full rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#00df9a] transition"
              type="email"
              placeholder="Enter your email"
            />
            <Button
              text={"Notify Me"}
              bgColor={"#00df9a"}
              textColor={"black"}
            />
          </form>
          <p className="text-xs text-gray-300 mt-3 text-center">
            We care about the protection of your data. Read our{" "}
            <a
              href="#"
              className="text-[#00df9a] underline hover:text-[#00b87c] transition"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
