import React from "react";
import ProgramButton from "@/components/program_component/program_button";
import { Button, ButtonGroup } from "@nextui-org/react";
import degreeJson from "@/utils/degree.json";
import { Degree } from "@/types/course";

type Props = { params: { degree: string } };

const page = ({ params }: Props) => {
    const { degree } = params;
    const degreeText = degreeJson[degree as keyof Degree];

    return (
        <div>
            <section className="bg-whaite py-12 pt-0 relative">
                <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12 max-w-screen-2xl max-h-300px relative">
                    <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
                        <h1 className="text-[64px] font-bold">
                            {degreeText} Program
                        </h1>
                        <h5 className="text-[25px] font-[300] text-[#7D7D7D] pt-5">
                            Master of Science Program in Computer Science
                        </h5>
                    </header>
                </section>
                <div className="flex justify-center items-flex h-screen w-full md:w-auto relative">
                    <div
                        className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2
             shadow-small rounded-large transition-transform-background motion-reduce:transition-none border-none bg-white w-full 
             lg:max-w-[80%] p-2"
                    >
                        <div className="flex-grow overflow-y-auto pt-5 py-5 px-10">
                            <ProgramButton />
                            <div className="p-5">
                                <ProgramButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;

// <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12 max-w-screen-2xl max-h-300px relative"></section>
