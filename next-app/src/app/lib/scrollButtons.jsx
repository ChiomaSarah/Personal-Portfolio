"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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
        <button
          onClick={scrollToBottom}
          className="cursor-pointer fixed top-24 right-6 z-50 p-3 bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse ring-2 ring-purple-400 ring-opacity-60"
          aria-label="Scroll to bottom"
        >
          <FaArrowDown className="text-lg" />
        </button>
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed right-6 bottom-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse ring-2 ring-blue-400 ring-opacity-60"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default ScrollButtons;
