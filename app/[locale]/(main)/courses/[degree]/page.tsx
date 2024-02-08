import { Table_courses } from "@/components/course_components/table_course";
import Courses_navbar from "@/components/course_components/courses_navbar";
import axios from "axios";
import degreeJson from "@/utils/degree.json";
import { Course, Degree } from "@/types/course";
import { useState } from "react";
import { SettingCourse } from "@/types/setting";

type Props = { params: { degree: string } };

const Courses = async ({ params }: Props) => {
    const { degree } = params;
    const degreeText = degreeJson[degree as keyof Degree];
    const courses = (
        await axios.get<{ courses: Course[] }>(
            `${process.env.NEXT_PUBLIC_API_URL}/course/${degree}`
        )
    ).data.courses;

    const setting = (
        await axios.get<{ academic_year: SettingCourse }>(
            `${process.env.NEXT_PUBLIC_API_URL}/setting/academic-year`
        )
    ).data.academic_year;
    return (
        <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12">
            <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">{degreeText} Courses</h2>
                {/* <div className="pt-20">
            <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2
             shadow-small rounded-large transition-transform-background motion-reduce:transition-none border-none bg-white w-auto h-1/4 p-2" >
                <div className="p-8">
                <Table_courses/>
                </div>
            </div>
          </div> */}
                <div className="pt-20">
                    <div
                        className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2
             shadow-small rounded-large transition-transform-background motion-reduce:transition-none border-none bg-white w-full 
             lg:w-auto p-2"
                    >
                        <div className="flex-grow overflow-y-auto">
                            <Courses_navbar setting={setting} />
                            <div className="p-8">
                                <Table_courses
                                    courses={courses}
                                    setting={setting}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Courses;
