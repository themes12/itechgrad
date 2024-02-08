import React from "react";
import { useLocale } from "next-intl";
import Section from "@/components/section";
import PlanDisplay from "@/components/program_component/plan";
import { Program } from "@/types/program";
import { strapi } from "@/app/[locale]/(main)/layout";

type Props = { params: { degree: string, program: number; plan: number } };

const Page = async ({ params }: Props) => {
    const { program, plan, degree } = params;
    const locale = useLocale();
    const programData = await strapi.findOne<Program>('programs', `${program}?locale=${locale}`, {
        fields: ["name"],
        populate: [
            "plans",
            "plans.sections",
            "degree",
            "plans.sections.content.text",
            "plans.sections.content.header.columns.*",
            "plans.sections.content.rows.columns.*",
            "localizations.plans"
        ]
    });
    
    return (
        <Section>
            <div className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd]">
                <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 py-8">
                    <h1 className="text-4xl font-bold text-center">
                        {programData.data.attributes.name}
                    </h1>
                </Section>
            </div>
            <PlanDisplay planId={plan} programId={program} degree={degree} plans={programData.data.attributes.plans} degreeData={programData.data.attributes.degree.data} />
        </Section>
    );
};

export default Page;
