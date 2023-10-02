"use client";
import React, { useState } from "react";
import {
    Button,
} from "@nextui-org/react";

function ProgramButton() {
  const [hoveredButton , setHoveredBox] = useState<number | null>(null);

  const handleMouseEnter = (boxNumber: number) => {
      setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
      setHoveredBox(null);
  };
  const isButtonHovered = (boxNumber: number) => {
    return hoveredButton === boxNumber;
};


  return (
    <div>
      <h2 className="text-[36px] pb-12 font-bold px-12 pt-10">Master's Degree Program 2566</h2>
      <div className="mb-4 w-full flex flex-col items-center">
      <Button 
        className={`flex justify-between items-center bg-[#E7F1FB] w-80 h-16 text-rgb-28-14-14 py-2 px-4 rounded-md shadow-md cursor-pointer hover:bg-[#262626] active:translate-y-2 ${isButtonHovered(1) ? 'text-white' : 'text-blue-950'}`}
        style={{ width: '90%' }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-grow">
          <p className={`text-left text-[18px] font-bold px-5 ${isButtonHovered(1) ? 'text-white' : 'text-blue-950'}`}>
            Type 1 (Plan A Type A1)
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Button>
      </div>&nbsp;
      <div className="mb-4 w-full flex flex-col items-center">
      <Button 
        className={`flex justify-between items-center bg-[#E7F1FB] w-80 h-16 text-rgb-28-14-14 py-2 px-4 rounded-md shadow-md cursor-pointer hover:bg-[#262626] active:translate-y-2 ${isButtonHovered(2) ? 'text-white' : 'text-blue-950'}`}
        style={{ width: '90%' }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-grow">
          <p className={`text-left text-[18px] font-bold px-5 ${isButtonHovered(2) ? 'text-white' : 'text-blue-950'}`}>
            Type 2 (Plan A Type A2)
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Button>
      </div>&nbsp;
      <div className="mb-4 w-full flex flex-col items-center">
      <Button 
        className={`flex justify-between items-center bg-[#E7F1FB] w-80 h-16 text-rgb-28-14-14 py-2 px-4 rounded-md shadow-md cursor-pointer hover:bg-[#262626] active:translate-y-2 ${isButtonHovered(3) ? 'text-white' : 'text-blue-950'}`}
        style={{ width: '90%' }}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-grow">
          <p className={`text-left text-[18px] font-bold px-5 ${isButtonHovered(3) ? 'text-white' : 'text-blue-950'}`}>
            Type 3 (Plan B)
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Button>
      </div>&nbsp;
    </div>
  );
}

export default ProgramButton;
