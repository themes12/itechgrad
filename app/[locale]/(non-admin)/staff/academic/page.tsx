"use client"
import React from 'react'
import Section from '@/components/section'
import {Divider ,Image} from "@nextui-org/react";
import {CardStaff} from '@/components/card_staff/cardstaff';
type Props = {}

const page = (props: Props) => {
  return (

    <div>
      <Section>
        <header className="flex z-40  h-auto items-center justify-center">
          <img className="relative" width={1520} height={789} src="/academic.jpg" />
        </header>
      </Section>
      <Section>

        <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
          <div className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8">
            <h1 className="text-2xl xxs:text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold md:px-0 lg:px-24 xl:px-40">Academic&nbsp;Staff</h1>
          </div>
        </header>
      </Section>
      <Section>
        <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
          <div className=" relative  items-center">
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#ccc',
                margin: '50px 0',
                display: 'block',
              }} />
          </div>
        </header>
      </Section>
      <Section>
        <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
          <div className="mb-24 relative mt-8">
            <CardStaff></CardStaff>
          </div>
        </div>

        <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
          <div className="mb-24 relative mt-8">
            <CardStaff></CardStaff>
          </div>
        </div>
      </Section>

    </div>

  );
}

export default page