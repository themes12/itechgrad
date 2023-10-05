"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { Button, useDisclosure } from "@nextui-org/react";
import { Program } from "@/types/program";
import { useLocale } from "next-intl";

function ProgramNavbar({
    degree,
    data,
    setSelectedProgram,
}: {
    degree: string;
    data: Program[];
    setSelectedProgram: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const locale = useLocale();
    return (
        <div>
            <div className="md:ml-auto md:mr-auto flex flex-wrap items-center xl:pl-20 lg:pl-20 md:pl-20 sm:pl-15 xs:pl-10 xxs:pl-10">
                {data.map((value, index) => (
                    <Button
                        onClick={() => setSelectedProgram(index)}
                        key={index}
                        className="bottom_program text-base font-medium rounded-md xxxs:text-sm"
                        variant="light"
                    >
                        {locale === "th" ? value.name_th : value.name_en}
                    </Button>
                ))}
            </div>
            <div
                style={{
                    width: "100%",
                    height: "0.0625rem",
                    margin: "0.1rem",
                    backgroundColor: "#ccc",
                    display: "block",
                }}
            />
        </div>
    );
}

export default ProgramNavbar;
