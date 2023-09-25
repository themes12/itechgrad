"use client"
import React from 'react'
import { Announcement_navbar } from '@/components/announcement_component/announce_navbar';
type Props = {}

const page = (props: Props) => {
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
          <Announcement_navbar/>
        </header>
      </section>
    </div>

  )
}

export default page
