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
          <h1 className="xxxs:text-[2rem] xxs:text-[2.5rem] md:text-[4rem] font-bold">Announcement</h1>
          <h6 className="text-lg font-[300] text-[#7D7D7D]">Announcement, News and Events of Computer Science CMU</h6>
            <div className="pt-50">
              <Announcement_card/>
            </div>
        </header>
      </section>
    </div>

  );
}

export default page