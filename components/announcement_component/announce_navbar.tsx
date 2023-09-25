import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
import {
    Button,
  } from "@nextui-org/react";

export const Announcement_navbar = () => {
    const buttonStyles = {
        height: '40px',
        fontSize: '15px',
        color: '#797979',
        fontWeight: 400,
        marginRight: '10px',
        marginBottom: '10px',
        border: '1px solid #797979', 
        alignItems: 'left'
    };
    return (
        <Navbar>
        <NavbarContent className="flex flex-wrap flex-col items-center">
            <NavbarBrand>
            <div className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
                <Button radius="full" variant="ghost" style={buttonStyles}>All</Button>
                <Button radius="full" variant="ghost" style={buttonStyles}>Announcement</Button>
                <Button radius="full" variant="ghost" style={buttonStyles}>News</Button>
                <Button radius="full" variant="ghost" style={buttonStyles}>Congratulations</Button>
                <Button radius="full" variant="ghost" style={buttonStyles}>Events</Button>
                <div className="inline-flex items-center w-[365px] py-1 px-3 mb-[10px]">
                <Input
                    type="text"
                    variant="bordered"
                    placeholder="Search..."
                />
            </div>
            </div>
            </NavbarBrand>
        </NavbarContent>
        </Navbar>

    );
};