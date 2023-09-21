import React from 'react'
import Section from "@/components/section";

type Props = {}

const page = (props: Props) => {
  return (
      <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12">
        <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
          <h2 className="text-4xl/[32px] font-bold ">Master's Degree Courses</h2>
        </header> 
        <div className="pt-20">        
          <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl sm:max-w-xl lg:max-w-5xl xl:max-w-6xl xs:max-w-xs">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
          </div> 
        </div>
      </section>
      
  )
}

export default page