"use client";
import { Table_courses } from '@/components/course_components/table_course';
import React from 'react'

type Props = {};

const page = (props: Props) => {
  return (
      <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12">
        <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
          <h2 className="text-4xl/[32px] font-bold ">Master's Degree Courses</h2>
          <div className="pt-20">
            <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2
             shadow-small rounded-large transition-transform-background motion-reduce:transition-none border-none bg-white w-auto h-1/4 p-2" >
                <div className="p-8">
                  <Table_courses></Table_courses>
                </div>
            </div>
          </div>
        </header> 
        {/* <div className="pt-20">        
          <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl sm:max-w-xl lg:max-w-5xl xl:max-w-6xl xs:max-w-xs">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
          </div> 
        </div> */}
      </section>
      
      );
}

export default page;