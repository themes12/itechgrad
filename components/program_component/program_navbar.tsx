"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { Button, useDisclosure } from "@nextui-org/react";
import { Program } from "@/types/program";
import { useLocale } from "next-intl";
import { TabMenu } from "primereact/tabmenu";
import { template } from "@babel/core";

function ProgramNavbar({
    degree,
    data,
    setSelectedProgram,
    selectedProgram
}: {
    degree: string;
    data: Program[];
    setSelectedProgram: React.Dispatch<React.SetStateAction<number>>;
    selectedProgram: number;
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const locale = useLocale();
    
    const items = data.map(
        (value,index) => {
            return {
                label: locale === "th" ? value.name_th : value.name_en,
                template: (options: any) => 
                    <Button
                        onClick={() => setSelectedProgram(index)}
                        key={index}
                        className="xxs:text-base font-medium rounded-md text-sm"
                        variant="light"
                    >
                        {options.label}
                    </Button>
            }
        }
    )
    console.log(items)
    return (
        <div>
            <TabMenu
                model={items}
                activeIndex={selectedProgram}
                onTabChange={(e) => setSelectedProgram(e.index)}
            />
            {/* <div className="md:ml-auto md:mr-auto flex flex-wrap items-center xl:pl-20 lg:pl-20 md:pl-20 sm:pl-15 xs:pl-10 xxs:pl-10">
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
            </div> */}
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
