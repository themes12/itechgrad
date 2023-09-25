"use client"
import React from 'react'
import { Announcement_card } from '@/components/announcement_component/announce_card';
import {
  Button,
} from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
type Props = {}

const page = (props: Props) => {
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
    <div>
      <section>
        <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
          <h1 className="text-[64px] font-bold">Announcement</h1>
          <h6 className="text-[18px] font-[300] text-[#7D7D7D]">Announcement, News and Events of Computer Science CMU</h6>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#ccc',
                margin: '50px 0',
                display: 'block',
              }}
            />
            <div className="md:ml-auto md:mr-auto flex flex-wrap items-center">
              <Button radius="full" variant="ghost" style={buttonStyles}>All</Button>
              <Button radius="full" variant="ghost" style={buttonStyles}>Announcement</Button>
              <Button radius="full" variant="ghost" style={buttonStyles}>News</Button>
              <Button radius="full" variant="ghost" style={buttonStyles}>Congratulations</Button>
              <Button radius="full" variant="ghost" style={buttonStyles}>Events</Button>
              <div className="items-right w-[365px] py-1 px-3 lg:ml-auto mb-5 md:items-left">
                <Input
                  type="text"
                  variant="bordered"
                  placeholder="Search..."
                />
              </div>
            </div>

            <div className="pt-20">
              <Announcement_card/>
            </div>
        </header>
      </section>
    </div>

  );
}

export default page
