"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { Button, useDisclosure } from "@nextui-org/react";

function ProgramNavbar({ degree }: { degree: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div>
            <div className="md:ml-auto md:mr-auto flex flex-wrap items-center xl:pl-20 lg:pl-20 md:pl-20 sm:pl-15 xs:pl-10 xxs:pl-10">
                    <Button
                        className="bottom_program text-base font-medium rounded-md xxxs:text-sm"
                        variant="light"
                    >
                        {degree} Program 2566
                    </Button>
                    <Button
                        className="bottom_program text-base font-medium rounded-md xxxs:text-sm"
                        variant="light"
                    >
                        {degree} Program 2561
                    </Button>
            </div>
            <div
                style={{
                    width: '100%', 
                    height: '0.0625rem',
                    margin: '0.1rem',
                    backgroundColor: '#ccc',
                    display: 'block',
                }}
                    />
        </div>

            

    );
}

export default ProgramNavbar;
