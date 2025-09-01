"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="bg-purple-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#" className="text-white font-bold text-xl">
          Sarah's Portfolio
        </a>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>

        <ul
          className={`md:flex md:flex-row md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-purple-900 md:bg-transparent z-40 transform transition-all duration-500 ease-in-out ${
            open
              ? "max-h-60 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          } origin-top`}
        >
          <li>
            <a href="#home" className="block px-4 py-2 text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="block px-4 py-2 text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block px-4 py-2 text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
