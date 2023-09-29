"use client"
import React from 'react'
import BackButton from '@/components/announcement_component/back_button';
import AnnounceHeadline from '@/components/announcement_component/announce_headline';
import {
  Divider
} from "@nextui-org/react";

import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
import Section from '@/components/section';

type Props = {}

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='bg-[#262626]'>
        <Section className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
            <div>
                <BackButton />
            </div>
             <Divider className="mt-3 mb-5 bg-[#515151]"/>
        </Section>
        <Section className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
            <AnnounceHeadline/>
        </Section>
    </div>

  );
}
      
export default page