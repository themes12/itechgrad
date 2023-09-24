"use client"
import React from 'react'
import Section from '@/components/section'
import {Divider ,Image} from "@nextui-org/react";
import {CardStaff} from '@/components/card_staff/cardstaff';
type Props = {}

const page = (props: Props) => {
  return (
    <div>
    <section  className="bg-zinc-502">
      <header className="flex z-40  h-auto items-center justify-center">
          <img className="relative" width={1520} height={789} src="/academic.jpg" />
      </header>
    </section>
     <section  className="bg-zinc-502">
      
      <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
          <div className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
            <h1 className="text-[64px] font-bold ">Academic Staff</h1>
            
          </div>
      </header>
     </section>
     <section  className="bg-zinc-502">
      <header className="z-40  h-auto items-center justify-center">
        <div className=" relative w-10/12 items-center">
          <Divider className="my-4" />
        </div>
      </header>
     </section>
     <section  className="bg-zinc-502">
      <header className="z-40  h-auto items-center justify-center">
        
            <CardStaff></CardStaff>
            
      </header>
     </section>
     <section  className="bg-zinc-502">
      <header className=" z-40  h-auto items-center justify-center">
        
            <CardStaff></CardStaff>
            
      </header>
     </section>
    </div>
    
  )
}

export default page