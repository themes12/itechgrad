"use client"
import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
import {
    Button,
    useDisclosure,
  } from "@nextui-org/react";

function program_navbar() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand className="flex justify-start pt-6">
          <Button className="bottom_program text-base font-medium rounded-md" variant="light">Master's Degree Program 2566</Button>
          <Button className="bottom_program text-base font-medium rounded-md" variant="light">Master's Degree Program 2561</Button>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}

export default program_navbar;
