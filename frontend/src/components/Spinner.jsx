import React from "react";

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute inset-0 animate-ping rounded-full bg-indigo-400 opacity-75"></div>
        {/* Middle ring */}
        <div className="absolute inset-2 animate-pulse rounded-full bg-indigo-500 opacity-50"></div>
        {/* Inner circle */}
        <div className="relative w-16 h-16 rounded-full bg-indigo-600"></div>
      </div>
      <p className="mt-4 text-sm text-gray-500 animate-pulse">Loading...</p>
    </div>
  );
}

export default Spinner;
