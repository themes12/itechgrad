import Section from "@/components/section";
import Image from "next/image";
import { CardStaff } from "@/components/card_staff/cardstaff";
import staffJson from "@/utils/staff.json";
import axios from "axios";
import {
    AcademicStaff,
    SupportStaff,
    StaffPageProps,
    StaffTypes,
} from "@/types/staff";
import { useTranslations } from "next-intl";

const Page = async ({ params }: { params: StaffPageProps }) => {
    const { type } = params;
    const staffType = staffJson[type as keyof StaffTypes];
    const staffTypeAPI = type === "academic" ? "lecturers" : "staffs";
    const response = (
        await axios.get<AcademicStaff[] | SupportStaff[]>(
            `https://cs-api-hw35.onrender.com/api/${staffTypeAPI}`
        )
    ).data;

    return (
        <div>
            <Section>
                <header className="flex z-40  h-auto items-center justify-center">
                    <Image
                        className="relative"
                        width={1520}
                        height={789}
                        alt="banner-academic-staff"
                        src="/academic.jpg"
                    />
                </header>
            </Section>
            <Section>
                <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                    <div className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                        <h1 className="md:text-left text-3xl md:text-5xl font-bold text-center">{staffType}</h1>
                    </div>
                </header>
            </Section>
            <Section>
                <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
                    <div className="relative items-center">
                        <div className="w-full p-[0.5px] bg-gray-300 my-4" />
                    </div>
                </header>
            </Section>
            <Section>
                <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
                    <div className="mb-24 relative mt-8">
                        {response.map(
                            (
                                staff: AcademicStaff | SupportStaff,
                                index: number
                            ) => (
                                <CardStaff
                                    key={index}
                                    type={type}
                                    staff={staff}
                                ></CardStaff>
                            )
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Page;
