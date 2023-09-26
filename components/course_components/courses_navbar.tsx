
import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";
import "@/components/course_components/course_navbar.css";

function course_navbar() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand>
          <Button className="bottom_course"  variant="light">Recent courses 1/2023</Button>
          <Button className="bottom_course" variant="light">All courses</Button>
        </NavbarBrand>

        <div className="flex items-center">
          <Input
            placeholder="Search..."
            
            width="200px"// Adjust the width as needed
          />
        </div>
      </NavbarContent>
    </Navbar>
  );
}

export default course_navbar;
