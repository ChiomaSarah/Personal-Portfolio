"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Tooltip = ({ text }) => (
  <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#FFD337] text-gray-900 text-xs px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {text}
    <span className="absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent border-l-[#FFD337]"></span>
  </span>
);

const ScrollButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop >= documentHeight - windowHeight - 100;
      const isAtTop = scrollTop < 100;
      const isScrollingDown = scrollTop > lastScrollY.current;

      lastScrollY.current = scrollTop;

      if (isAtTop) {
        // At the very top — show only down arrow.
        setShowScrollBottom(true);
        setShowScrollTop(false);
      } else if (isAtBottom) {
        // At the very bottom — show only up arrow.
        setShowScrollBottom(false);
        setShowScrollTop(true);
      } else if (isScrollingDown) {
        // Scrolling down — show only down arrow.
        setShowScrollBottom(true);
        setShowScrollTop(false);
      } else {
        // Scrolling up — show only up arrow.
        setShowScrollBottom(false);
        setShowScrollTop(true);
      }
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
            className="cursor-pointer p-3 bg-[#FFD337] text-gray-900 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ring-2 ring-[#FFD337] ring-opacity-60 animate-pulse"
            aria-label="Scroll to bottom"
          >
            <FaArrowDown className="text-lg" />
          </button>
          <Tooltip text="Go to bottom of page" />
        </div>
      )}

      {showScrollTop && (
        <div className="group fixed right-6 bottom-6 z-50">
          <button
            onClick={scrollToTop}
            className="cursor-pointer p-3 bg-[#FFD337] text-gray-900 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ring-2 ring-[#FFD337] ring-opacity-60 animate-pulse"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg" />
          </button>
          <Tooltip text="Go to top of page" />
        </div>
      )}
    </>
  );
};

export default ScrollButtons;
