import React from "react";

const ReadMore = () => {
    return (
    <div className="scale-in-center-2 anim-delay-700 text-white group bg-yellow-400 rounded inline-block text-xl md:text-2xl transition hover:bg-white focus:ring ring-opacity-50 ring-yellow-400">
        <span className="inline-block px-4 py-2 rounded-l border border-yellow-400 group-hover:text-yellow-400">
            Read More
        </span>
        <span className="inline-block bg-yellow-500 py-2 pl-2 pr-2 group-hover:pl-3 group-hover:pr-1 transition-all rounded-r border border-yellow-400 border-l-0">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="inline-block h-1 w-1 align-middle"
            style={{ width: "1em", height: "1em", verticalAlign: "-0.14em" }}>
            <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
            <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
            </svg>
        </span>
    </div>
)}

export default ReadMore;