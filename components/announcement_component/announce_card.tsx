import React, { useState } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

export const Announcement_card = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const handleMouseEnter = (boxNumber: number) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const isImageHovered = (boxNumber: number) => {
    return hoveredBox === boxNumber;
  };

  const isTextHovered = (boxNumber: number) => {
    return hoveredBox === boxNumber;
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div
            className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-start justify-center"
          >
            <div className="col-span-6 md:col-span-8">
              <p className="text-[#1C5CFF] text-[16px] font-[500] leading-normal">Announcement</p>
              <div
                className={`flex flex-col ${isTextHovered(1) ? "hovered" : ""}`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                style={{ transform: isTextHovered(1) ? "translateY(10px)" : "none", transition: "transform 0.8s ease" }}
              >

                <p className="font-[700] text-[30px] text-[#1E1E1E] leading-normal pt-[20px] pb-[20px]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Powerful Trading Tools and Features for Experienced Investors
                  </a>
                </p>
                <p className="font-[400] text-[15px] text-[#7D7D7D] leading-normal pt-[20px] pb-[20px]">
                  I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...
                </p>
                <p className="font-[400] text-[15px] text-[#797979] leading-normal pt-[20px] pb-[20px]">Day 21/09/2023</p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 flex items-center justify-center">
              <div
                className="image-container"
                style={{
                  transformOrigin: "top left", 
                  transform: isImageHovered(1) ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.8s ease",
                  width: "90%", 
                }}
              >
                <Image
                  alt=""
                  className="flex object-cover aspect-video h-[300px] w-full"
                  src={`https://picsum.photos/seed/${Image}/750`}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <br/>
    </div>
  );
};
