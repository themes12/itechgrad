"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Program } from "@/types/program";
import { useUpdateEffect } from "@reactuses/core";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";

function ProgramButton({
    degree,
    data,
    selectedProgram,
}: {
    degree: string;
    data: Program[];
    selectedProgram: number;
}) {
    const locale = useLocale();
    const [hoveredButton, setHoveredBox] = useState<number | null>(null);

    const handleMouseEnter = (boxNumber: number) => {
        setHoveredBox(boxNumber);
    };

    const handleMouseLeave = () => {
        setHoveredBox(null);
    };
    const isButtonHovered = (boxNumber: number) => {
        return hoveredButton === boxNumber;
    };

    useUpdateEffect(() => {
        console.log("update");
    }, [selectedProgram]);

    console.log(data);

    return (
        <div>
            <h2 className="text-[36px] pb-12 font-bold lg:px-12 pt-10 xxs:px-5">
                {locale === "th"
                    ? data[selectedProgram]?.name_th
                    : data[selectedProgram]?.name_en}
            </h2>
            {data.length > 0 ? (
                data[selectedProgram].type?.map((value, index) => (
                    <div
                        key={index}
                        className="mb-4 w-full flex flex-col items-center"
                    >
                        <Button
                            className={`flex justify-between items-center bg-[#E7F1FB] h-16 text-rgb-28-14-14 py-2 px-4 rounded-md shadow-md cursor-pointer hover:bg-[#262626] active:translate-y-2
                    ${isButtonHovered(1) ? "text-white" : "text-blue-950"}`}
                            style={{ width: "90%" }}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                            as={Link}
                            href={`/program/${degree}/${data[selectedProgram]._id}/${value._id}`}
                        >
                            <div className="flex-grow">
                                <p
                                    className={`text-left font-bold lg:text-lg md:text-lg sm:text-lg xs:text-base xxs:text-sm xxs:px-1 xxxs:text-xs xxxs:px-0
                            ${
                                isButtonHovered(1)
                                    ? "text-white"
                                    : "text-blue-950"
                            }`}
                                >
                                    {locale === "th"
                                        ? value.name_th
                                        : value.name_en}
                                </p>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="lg:w-6 xxs:w-5 xxxs:w-4 lg:h-6 xxs:h-5 xxxs:h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </Button>
                    </div>
                ))
            ) : (
                <>
                    <h1 className="text-2xl text-center">ไม่มีข้อมูล</h1>
                </>
            )}
        </div>
    );
}

export default ProgramButton;
