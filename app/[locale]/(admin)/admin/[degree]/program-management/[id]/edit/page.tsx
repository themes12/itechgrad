import Section from "@/components/section";
import axios from "axios";
import Form from "@/components/admin/program_management/form";
import { Program } from "@/types/program";

const EditCourse = async ({
    params,
}: {
    params: { id: string; degree: string };
}) => {
    const { id, degree } = params;
    const program = (
        await axios.get<{ program: Program }>(
            `${process.env.NEXT_PUBLIC_API_URL}/program/${degree}/${id}`
        )
    ).data.program;

    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <h1 className="font-bold text-3xl text-center">แก้ไขหลักสูตร</h1>
            <div className="mt-5">
                <Form params={params} program={program} />
            </div>
        </Section>
    );
};

export default EditCourse;
