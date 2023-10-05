import axios from "axios";
import { Program } from "@/types/program";
import Display_types from "@/components/program_component/display_types";

type Props = { params: { degree: string } };

const Page = async ({ params }: Props) => {
    const { degree } = params;

    const programs = (
        await axios.get<{ programs: Program[] }>(
            `${process.env.NEXT_PUBLIC_API_URL}/program/${degree}`
        )
    ).data.programs;

    return <Display_types data={programs} params={params} />;
};
export default Page;

// <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12 max-w-screen-2xl max-h-300px relative"></section>
