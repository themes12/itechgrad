import Section from "@/components/section";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import axios from "axios";
import { Course } from "@/types/course";
import HeaderEditor from "@/components/admin/course_management/header";
import TableCheckbox from "@/components/admin/course_management/table_checkbox";
import Action from "@/components/admin/course_management/action";
import { SettingCourse } from "@/types/setting";

type Props = {};

const CourseManagement = async ({ params }: { params: { degree: string } }) => {
    const { degree } = params;
    // const { data: session } = useSession();
    const courses = (
        await axios.get<{ courses: Course[] }>(
            `${process.env.NEXT_PUBLIC_API_URL}/course/${degree}/all`
        )
    ).data.courses;

    const setting = (
        await axios.get<{ academic_year: SettingCourse }>(
            `${process.env.NEXT_PUBLIC_API_URL}/setting/academic-year`
        )
    ).data.academic_year;

    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <div className="flex justify-between gap-3 items-end">
                <HeaderEditor setting={setting} degree={degree} />
            </div>
            <div className="card mt-5">
                <DataTable
                    className="w-full"
                    value={courses}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    <Column field="is_show" body={TableCheckbox}></Column>
                    <Column field="_id" header="รหัสวิชา"></Column>
                    <Column field="name_th" header="ชื่อวิชา"></Column>
                    <Column body={Action}></Column>
                </DataTable>
            </div>
        </Section>
    );
};

export default CourseManagement;
