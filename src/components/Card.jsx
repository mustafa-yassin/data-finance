import React from "react";
import Button from "./Button";

const Card = ({ image, text_1, text_2, text_3, price, title, theme }) => {
  const borderClass =
    theme === "focus"
      ? "border-4 border-[#00df9a] shadow-2xl"
      : "border border-gray-200 shadow-lg";
  const bgClass =
    theme === "focus" ? "bg-gradient-to-b from-[#e6fff6] to-white" : "bg-white";
  const btnProps =
    theme === "focus"
      ? { bgColor: "black", textColor: "#00df9a" }
      : { bgColor: "#00df9a", textColor: "#000000" };
  return (
    <div
      className={`w-full flex flex-col items-center p-6 my-8 rounded-2xl hover:scale-105 duration-500 transition-transform ${borderClass} ${bgClass}`}
      style={{ minHeight: 420 }}
    >
      <img
        className="w-24 h-24 mx-auto mt-[-3rem] p-1 rounded-full border-4 border-[#00df9a] bg-white object-cover shadow-md"
        src={image}
        alt=""
      />
      <h2 className="text-2xl text-black font-extrabold text-center py-5 tracking-wide uppercase">
        {title}
      </h2>
      <p className="text-center text-[#00df9a] text-4xl font-black pb-4 drop-shadow-lg">
        {price}
      </p>
      <div className="text-center font-medium w-full">
        <p className="py-2 border-b mx-8 text-black  rounded-t-lg">{text_1}</p>
        <p className="py-2 border-b mx-8 text-black ">{text_2}</p>
        <p className="py-2 mx-8 text-black  rounded-b-lg">{text_3}</p>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Button text={"Start Trial"} {...btnProps} />
      </div>
    </div>
  );
};

export default Card;
