import React from "react";
import axios from "axios";
import { Program, ProgramType } from "@/types/program";
import { useLocale } from "next-intl";
import Section from "@/components/section";
import { Menubar } from "primereact/menubar";
import { Button } from "@nextui-org/react";
import { Link } from "@/navigation";
import "./table.css";

type Props = { params: { program: string; plan: string } };

const Page = async ({ params }: Props) => {
    const { program, plan } = params;
    const locale = useLocale();
    const programTypes = (
        await axios.get<{ program: Program }>(
            `${process.env.NEXT_PUBLIC_API_URL}/plan/master-degree/${program}/plans`
        )
    ).data.program;
    const plans = (
        await axios.get<{ plan: ProgramType }>(
            `${process.env.NEXT_PUBLIC_API_URL}/plan/master-degree/${plan}`
        )
    ).data.plan;

    return (
        <Section>
            <div className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd]">
                <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 py-8">
                    <h1 className="text-4xl font-bold text-center">
                        {locale === "th"
                            ? programTypes?.name_th
                            : programTypes?.name_en}
                    </h1>
                </Section>
            </div>
            <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 py-8">
                <h2 className="text-[#002F43] text-2xl font-bold">
                    {locale === "th" ? plans?.name_th : plans?.name_en}
                </h2>
                {plans.content &&
                    plans.content.map((value, index) => {
                        return locale === "th" ? (
                            <>
                                <h3 className="text-xl py-2 px-4 rounded-lg shadow-md bg-[#B3E3F9] my-3">
                                    {value.th.name}
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: value.th.html,
                                    }}
                                    className="editor-display"
                                    // style={styles}
                                ></div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-xl p-2 rounded-lg shadow-md bg-[#B3E3F9] my-3">
                                    {value.en.name}
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: value.en.html,
                                    }}
                                    className="editor-display"
                                    // style={styles}
                                ></div>
                            </>
                        );
                    })}
            </Section>
        </Section>
    );
};

export default Page;
