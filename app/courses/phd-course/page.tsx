"use client";
import React from 'react';
import Section from "@/components/section";
import {StyleSheet, View, Text} from 'react-native';
import dynamic from 'next/dynamic';
import PhdPageInner from '@/components/course_components/phdPageInner';
import { Providers } from '@/app/providers';
import Footer from '@/components/footer';



type Props = {}

const page = (props: Props) => {
  return (
      <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12">
        <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
          <h2 className="text-4xl/[32px] font-bold ">PhD's Degree Courses</h2>
          <div className="pt-20">     
          <div className="swiper-slide swiper-slide-active width: 1208px; margin-right: 20px;" data-swiper-slide-index="0" >
            <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-small rounded-large backdrop-blur-md backdrop-saturate-150 transition-transform-background motion-reduce:transition-none border-none bg-background/60 dark:bg-default-100/50 w-auto h-1/4 p-2">
                <div className="pt-20">
                  <PhdPageInner/>
                             
                </div>
            </div>
          </div>
        </div>
        </header> 
      </section>
      
  )
}

export default page