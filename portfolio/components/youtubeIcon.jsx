import React from "react";

const YoutubeIcon = () => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="inline w-7 h-7 align-middle mr-1 -translate-y-0"
        role="img"
        aria-label="YouTube">
        <rect x="1" y="3" width="14" height="10" rx="2" ry="2" fill="currentColor" />
        <path d="M6.2 5.5v5l4.3-2.5L6.2 5.5z" fill="#ffffff" />
      </svg>
      <span>Youtube</span>
    </div>
  );
};

export default YoutubeIcon;
