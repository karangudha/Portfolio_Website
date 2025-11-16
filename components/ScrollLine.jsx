// components/ScrollLine.jsx
"use client"

import React, { useEffect, useState } from "react";
import "../app/globals.css";

const ScrollLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 left-0 w-full bg-blue-300 z-50 h-1">
      {/* Horizontal scroll line */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-transform duration-75 ease-in-out" 
        id="scroll-indicator"
        style={{
          transform: `translateX(${scrollPercentage-100}%)`,
          width: "100%",
        }} />
    </div>
  );
};

export default ScrollLine;