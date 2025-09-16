"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Tooltip = ({ text, color }) => (
  <span
    className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap ${color} text-white text-xs px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
  >
    {text}
    <span
      className={`absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent ${
        color.includes("purple") ? "border-l-purple-700" : "border-l-blue-700"
      }`}
    ></span>
  </span>
);

const ScrollButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop >= documentHeight - windowHeight - 100;
      const isAtTop = scrollTop < 100;

      setShowScrollBottom(!isAtBottom && scrollTop < 300);
      setShowScrollTop(scrollTop > 300 || isAtTop);
    };

    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollBottom && (
        <div className="group fixed top-24 right-6 z-50">
          <button
            onClick={scrollToBottom}
            className="cursor-pointer p-3 bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ring-2 ring-purple-400 ring-opacity-60 animate-pulse"
            aria-label="Scroll to bottom"
          >
            <FaArrowDown className="text-lg" />
          </button>
          <Tooltip text="Go to bottom of page" color="bg-purple-700" />
        </div>
      )}

      {showScrollTop && (
        <div className="group fixed right-6 bottom-6 z-50">
          <button
            onClick={scrollToTop}
            className="cursor-pointer p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ring-2 ring-blue-400 ring-opacity-60 animate-pulse"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg" />
          </button>
          <Tooltip text="Go to top of page" color="bg-blue-700" />
        </div>
      )}
    </>
  );
};

export default ScrollButtons;
