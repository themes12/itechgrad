"use client";
import Section from "@/components/section";
import { signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const ProgramManagement = ({ params }: { params: { degree: number } }) => {
    const { degree } = params;
    const { data: session } = useSession();
    console.log(session?.user);
    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <div>
                Name:{" "}
                <span className="font-bold">
                    {session?.user?.name} {degree}
                </span>
            </div>
        </Section>
    );
};

export default ProgramManagement;
