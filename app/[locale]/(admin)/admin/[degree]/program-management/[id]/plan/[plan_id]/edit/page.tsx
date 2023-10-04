import Section from "@/components/section";
import Form from "@/components/admin/program_management/plan/form";
import axios from "axios";
import { ProgramType } from "@/types/program";

type Props = {};

const Page = async ({
    params,
}: {
    params: { id: string; degree: string; plan_id: string };
}) => {
    const { degree, id, plan_id } = params;
    const plan = (
        await axios.get<{ plan: ProgramType }>(
            `${process.env.NEXT_PUBLIC_API_URL}/plan/${degree}/${plan_id}`
        )
    ).data.plan;
    console.log(plan);
    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <div>
                <Form params={params} data={plan} text="แก้ไขแผนการเรียน" />
            </div>
        </Section>
    );
};

export default Page;
