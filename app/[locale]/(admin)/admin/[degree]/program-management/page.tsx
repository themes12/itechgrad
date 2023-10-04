import Section from "@/components/section";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import axios from "axios";
import HeaderEditor from "@/components/admin/program_management/header";
import { Program } from "@/types/program";
import Action from "@/components/admin/program_management/action";

type Props = {};

const ProgramManagement = async ({
    params,
}: {
    params: { degree: string };
}) => {
    const { degree } = params;
    // const { data: session } = useSession();
    const programs = (
        await axios.get<{ programs: Program[] }>(
            `${process.env.NEXT_PUBLIC_API_URL}/program/${degree}`
        )
    ).data.programs;
    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <div className="flex justify-end">
                <HeaderEditor degree={degree} />
            </div>
            <div className="card mt-5">
                <DataTable
                    className="w-full"
                    value={programs}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    <Column field="name_th" header="หลักสูตร"></Column>
                    <Column body={Action}></Column>
                </DataTable>
            </div>
        </Section>
    );
};

export default ProgramManagement;
