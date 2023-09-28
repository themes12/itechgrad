"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import "@/components/program_component/program_button_style.css";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

function ProgramButton() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <h2 className="text-[36px] pb-12 font-bold px-12 pt-10">
                Master&apos;s Degree Program 2566
            </h2>
            <div className="w-full flex flex-col items-center mt-2.5">
                <Button className="custom-button" style={{ width: "90%" }}>
                    <div className="text-left">Type 1 (Plan A Type A1)</div>
                </Button>
            </div>
            &nbsp;
            <div className="w-full flex flex-col items-center mt-2.5">
                <Button className="custom-button" style={{ width: "90%" }}>
                    <p className="text-left">Type 1 (Plan A Type A1)</p>
                </Button>
            </div>
            &nbsp;
            <div className="w-full flex flex-col items-center mt-2.5">
                <Button className="custom-button" style={{ width: "90%" }}>
                    <p className="text-left">Type 1 (Plan A Type A1)</p>
                </Button>
            </div>
            &nbsp;
        </div>
    );
}

export default ProgramButton;
