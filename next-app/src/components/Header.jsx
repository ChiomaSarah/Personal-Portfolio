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
          className="text-white md:hidden p-2 rounded-md cursor-pointer relative w-10 h-10 flex items-center justify-center z-60"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <HiX className="w-7 h-7 transition-all duration-300 ease-out" />
          ) : (
            <HiMenu className="w-7 h-7 transition-all duration-300 ease-out" />
          )}
        </button>

        {/* Drawer */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-900 to-indigo-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Items */}
          <ul className="flex-1">
            <li>
              <a
                href="#home"
                className="block px-8 py-4 text-white hover:bg-black/20 transition-colors text-lg font-medium border-b border-purple-700 mt-4"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-8 py-4 text-white hover:bg-black/20 transition-colors text-lg font-medium border-b border-purple-700"
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-8 py-4 text-white hover:bg-black/20 transition-colors text-lg font-medium border-b border-purple-700"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Footer with Logo */}
          <div className="p-6 border-t border-purple-700 flex flex-col items-center justify-center">
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-[4px_4px_6px_rgba(0,0,0,0.4),-4px_-4px_6px_rgba(255,255,255,0.05)] ring-1 ring-white/5 mb-3">
              <Image
                src="/logo.png"
                alt="Sarah's Logo"
                fill
                className="object-contain p-1.2 brightness-110 contrast-125"
              />
            </div>
            <p className="text-white text-sm font-medium text-center">
              Sarah's Portfolio
            </p>
            <p className="text-purple-300 text-xs mt-1 text-center">
              Creative Developer & Designer
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
