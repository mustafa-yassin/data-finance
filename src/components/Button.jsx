import React from "react";

const Button = ({ text, bgColor, textColor, theme }) => {
  if (theme === "primary") {
    return (
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        className="w-[200px] rounded-md font-bold mx-auto py-2 mt-9 hover:scale-105 transition-all duration-300 ease-in-out"
        onClick={() => {
          if (text === "Get Started") {
            window.location.href = "/resources";
          } else if (text === "Learn More") {
            window.location.href = "/about";
          }
        }}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-[200px] rounded-md font-bold my-6 px-4 py-2  hover:scale-105 transition-all duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
