import Section from "@/components/section";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import axios from "axios";
import { Program } from "@/types/program";
import Action from "@/components/admin/program_management/plan/action";
import HeaderEditor from "@/components/admin/program_management/plan/header";

type Props = {};

const Page = async ({
    params,
}: {
    params: { id: string; degree: string; plan_id: string };
}) => {
    const { id, degree, plan_id } = params;

    const program = (
        await axios.get<{ program: Program }>(
            `${process.env.NEXT_PUBLIC_API_URL}/plan/${degree}/${id}/plans`
        )
    ).data.program;

    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <div className="flex justify-end">
                <HeaderEditor params={params} />
            </div>
            <div className="card mt-5">
                <DataTable
                    className="w-full"
                    value={program?.type}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    <Column field="name_th" header="ชื่อแผนการเรียน"></Column>
                    <Column body={Action}></Column>
                </DataTable>
            </div>
        </Section>
    );
};

export default Page;
