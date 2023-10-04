import Section from "@/components/section";
import axios from "axios";
import Form from "@/components/admin/program_management/form";
import { Program } from "@/types/program";

const Page = async ({ params }: { params: { id: string; degree: string } }) => {
    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <h1 className="font-bold text-3xl text-center">เพิ่มหลักสูตร</h1>
            <div className="mt-5">
                <Form params={params} />
            </div>
        </Section>
    );
};

export default Page;
