import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="fixed left-0 top-0 w-full bg-[#000300] z-50">
      <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">DFinance.</h1>
        <ul className="hidden md:flex">
          <Link to="/" className="hover:text-[#00df9a]">
            <li className="p-4">Home</li>
          </Link>
          <Link to="/resources" className="hover:text-[#00df9a]">
            <li className="p-4">Resources</li>
          </Link>
          <Link to="/about" className="hover:text-[#00df9a]">
            <li className="p-4">About</li>
          </Link>
          <Link to="/contact" className="hover:text-[#00df9a]">
            <li className="p-4">Contact</li>
          </Link>
        </ul>
        <div onClick={() => handleNav()} className="md:hidden">
          {toggleNav ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </div>
        <div
          className={
            toggleNav
              ? "fixed top-0 left-0 h-full my-24 border-r border-r-gray-900 w-[60%] bg-[#000300] md:hidden ease-in-out duration-500 "
              : "fixed top-0 left-[-100%] my-24 ease-in-out duration-500 "
          }
        >
          <ul className="pt-17 uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
