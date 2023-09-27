
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

function Program_navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand className="flex justify-start"> {/* Use "flex justify-start" to align buttons to the left */}
          <Button className="bottom_program text-[16px] font-bold" variant="light">Master&apos;s Degree Program 2566</Button>
          <Button className="bottom_program text-[16px] font-bold" variant="light">Master&apos;s Degree Program 2561</Button>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}

export default Program_navbar;
