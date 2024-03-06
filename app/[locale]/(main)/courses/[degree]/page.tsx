import { Table_courses } from "@/components/course_components/table_course";
import Courses_navbar from "@/components/course_components/courses_navbar";
import { useLocale } from "next-intl";
import Strapi from "strapi-sdk-js";
import { DegreeCourse } from "@/types/course";

type Props = { params: { degree: string } };
const strapi = new Strapi()

const Courses = async ({ params }: Props) => {
    const { degree } = params;

    const courseDegrees = await strapi.find<DegreeCourse[]>('degrees', {
        filters: {
            slug: degree,
            courses: {
                is_open: true
            }
        },
        populate: [
            "courses",
            "courses.credit",
        ]
    });

    const courses = courseDegrees.data[0]?.attributes;
    
    return (
        <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12">
            <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">{courses.general_name} Courses</h2>
                <div className="pt-20">
                    <div
                        className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2
             shadow-small rounded-large transition-transform-background motion-reduce:transition-none border-none bg-white w-full 
             lg:w-auto p-2"
                    >
                        <div className="flex-grow overflow-y-auto">
                            <Courses_navbar />
                            <div className="p-8">
                                <Table_courses
                                    courses={courses.courses}
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
