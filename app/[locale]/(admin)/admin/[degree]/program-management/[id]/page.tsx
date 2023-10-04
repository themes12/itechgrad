import Section from "@/components/section";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import axios from "axios";
// import HeaderEditor from "@/components/admin/course_management/header";
import { Program } from "@/types/program";
import Action from "@/components/admin/program_management/action";
import { Link } from "@/navigation";
// import { SettingCourse } from "@/types/setting";

type Props = {};

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    const program = (
        await axios.get<{ program: Program }>(
            `${process.env.NEXT_PUBLIC_API_URL}/program/${id}/types`
        )
    ).data.program;

    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            {/* <div className="flex justify-between gap-3 items-end">
                <HeaderEditor setting={setting} degree={degree} />
            </div> */}
            <div className="card mt-5">
                <DataTable
                    className="w-full"
                    value={program.type}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    <Column field="name_th" header="ชื่อแผน"></Column>
                    <Column body={Action}></Column>
                </DataTable>
            </div>
        </Section>
    );
};

export default Page;
