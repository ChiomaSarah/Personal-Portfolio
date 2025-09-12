"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-[4px_4px_6px_rgba(0,0,0,0.4),-4px_-4px_6px_rgba(255,255,255,0.05)] ring-1 ring-white/5">
            <Image
              src="/logo.png"
              alt="Sarah's Logo"
              fill
              className="object-contain p-1.2 brightness-110 contrast-125"
              priority
            />
          </div>
          <a href="#" className="text-white font-bold text-2xl tracking-tight ">
            Sarah's Portfolio
          </a>
        </div>

        <button
          className="text-white md:hidden p-2 rounded-md cursor-pointer relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <HiMenu
            className={`w-7 h-7 absolute transition-all duration-300 ease-out ${
              open
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <HiX
            className={`w-7 h-7 absolute transition-all duration-300 ease-out ${
              open
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>

        <ul
          className={`md:flex md:flex-row md:space-x-8 absolute md:static top-20 left-0 w-full md:w-auto bg-gradient-to-r from-purple-900 to-indigo-900 md:bg-transparent z-40 transform transition-all duration-300 ease-in-out ${
            open
              ? "max-h-60 opacity-100 scale-y-100 py-2"
              : "max-h-0 opacity-0 scale-y-0 "
          } origin-top shadow-lg md:shadow-none`}
        >
          <li>
            <a
              href="#home"
              className="block px-8 py-3 text-white hover:bg-black/20 md:hover:bg-transparent md:hover:text-purple-200 transition-colors text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block px-8 py-3 text-white hover:bg-black/20 md:hover:bg-transparent md:hover:text-purple-200 transition-colors text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-8 py-3 text-white hover:bg-black/20 md:hover:bg-transparent md:hover:text-purple-200 transition-colors text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
