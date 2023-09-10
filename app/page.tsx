"use client"
import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <div className="space-y-4">
        <h2 className="font-bold text-4xl xxs:text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl text-[#002F43]">Master and Ph.D Program in</h2>
        <h2 className="font-extrabold text-5xl xxs:text-6xl xs:text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFB724]">Computer Science CMU</h2>
      </div>
      <div className="flex flex-col sm:flex-row mt-16 justify-evenly mx-10 lg:mx-20 gap-x-10 gap-y-2">
        <div className="w-1/2 lg:w-5/12">
          <h5 className="font-normal text-[#515151] text-lg">Department of Computer Science <br /> Faculty of Science, Chiang Mai University</h5>
          <Button className="mt-10 px-7 text-xl font-medium text-white bg-[#262626] hover:bg-[#515151]" radius="md" size="lg">
            View program
          </Button>
        </div>
        <div className="w-1/2 lg:w-7/12">
          <Spline scene="https://prod.spline.design/TXvSKMFlAWim57Di/scene.splinecode" />
        </div>
      </div>

    </main>
  )
}
