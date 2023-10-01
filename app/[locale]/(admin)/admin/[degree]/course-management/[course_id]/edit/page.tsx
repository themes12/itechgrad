import Section from '@/components/section'
import Form from '@/components/admin/course_management/form'
import axios from "axios";
import { Course } from '@/types/course';

type Props = {}

const EditCourse = async ({ params }: { params: { course_id: string, degree: string } }) => {
    const { course_id } = params;
    const course = (
        await axios.get<{ course: Course }>(
            `${process.env.NEXT_PUBLIC_API_URL}/course/${course_id}`
        )
    ).data.course;

    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <h1 className="font-bold text-3xl text-center">แก้ไขรายวิชา</h1>
            <div className="mt-5">
                <Form params={params} course={course} />
            </div>
        </Section>
    )
}

export default EditCourse