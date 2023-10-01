import React from "react";

type Props = {};

const page = (props: Props) => {
    return (
        <>
            <section className=" relative pt-4 mb-20 md:pt-8 lg:pt-10 md:pb-8 lg:pb-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 flex md:flex-row ">
                <div className="bg-white z-10 mt-48 mr-[12.7rem] pt-2">
                    <h2 className="flex justify-start font-bold text-[2rem] xxs:text-[2rem] xs:text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] text-[#0E80E9] ml-8 ">
                        Master&apos;s degree  program
                    </h2>

                    <p className="flex justify-start font-normal text-base xxs:text-base xs:text-base sm:text-base md:text-base lg:text-base xl:text-base text-[#000000] ml-8 mt-4 mr-8">
                        "Computer Science is a discipline that relies on knowledge and understanding of essential computer concepts, which are critical for effectively solving complex problems systematically and accurately. Additionally, it involves an understanding of applying data and information as a foundation and a commitment to keeping up with rapidly evolving technologies and contemporary techniques for swift and efficient operations to meet the needs of both the public and private sectors.
                        <br />
                        <br />
                        Students in this field can develop knowledge and expertise in various areas, such as software development, data science and technology, and computer networking. They have the potential to conduct high-quality research, solve problems, and continuously enhance themselves. This field provides qualifications and capabilities for employment and can be a valuable asset to all aspects of society."
                    </p>

                    <button className="flex cursor-pointer ml-8 mt-10 bg-[#0E80E9] text-white px-4 py-4 rounded-[2rem] font-normal text-sm items-center justify-between">
                        <span>view Master&apos;s program&nbsp;&nbsp;</span>
                        <span>&#10132;</span>
                    </button>

                </div>

                <div className="z-0 -ml-80 ">
                    <img className="mx-auto object-fill lg:mr-[45rem]" src="/_DSC3640.jpg" alt="" />
                </div>
            </section>

            <section className=" relative pt-4 mb-40 md:pt-8 lg:pt-10 md:pb-8 lg:pb-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 flex flex-row ">

                <div className="z-0 ">
                    <img className="mx-auto object-fill lg:mr-[45rem]" src="/_DSC3484.jpg" alt="" />
                </div>

                <div className="bg-white z-10 mt-[17.5rem] -ml-[5.6rem] pt-6">
                    <h2 className="flex justify-start font-bold text-[2rem] xxs:text-[2rem] xs:text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] text-[#0E80E9] ml-8 ">
                        PhD&apos;s degree  program
                    </h2>

                    <p className="flex justify-start font-normal text-base xxs:text-base xs:text-base sm:text-base md:text-base lg:text-base xl:text-base text-[#000000] ml-8 mt-4  ">
                        "The Doctor of Philosophy (Ph.D.) program in Computer Science aims to produce graduates who possess a deep understanding of the science, a thirst for knowledge, and a commitment to staying up-to-date with advancements in the field to continually develop themselves.
                        They should have innovative and creative thinking abilities, be capable of conducting independent research, and contribute to the creation of new knowledge or innovations that hold value and have the potential to enhance society and the nation ethically."
                    </p>

                    <button className="flex cursor-pointer ml-8 mt-10 bg-[#AFDEF9] text-[#0E80E9] px-4 py-4 rounded-[2rem] font-normal text-sm items-center justify-between">
                        <span>view PhD&apos;s program&nbsp;&nbsp;</span>
                        <span>&#10132;</span>
                    </button>

                </div>

            </section>

        </>
    )
}

export default page;