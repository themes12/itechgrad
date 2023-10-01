import React from "react";

type Props = {};

const page = (props: Props) => {
    return (
        <>
            <section className="pt-4 mb-8 md:pt-8 lg:pt-10 md:pb-8 lg:pb-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 flex flex-row">
                <div className="space-y-4 pr-64 z-10">
                    <h2 className="flex justify-start font-bold text-[2rem] xxs:text-[2rem] xs:text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] text-[#0A76DB] mx-8 mt-8 ">
                        Master&apos;s degree  program
                    </h2>

                    <p className="flex justify-start font-normal text-base xxs:text-base xs:text-base sm:text-base md:text-base lg:text-base xl:text-base text-[#000000] mx-8 mt-4 ">
                        "Computer Science is a discipline that relies on knowledge and understanding of essential computer concepts, which are critical for effectively solving complex problems systematically and accurately. Additionally, it involves an understanding of applying data and information as a foundation and a commitment to keeping up with rapidly evolving technologies and contemporary techniques for swift and efficient operations to meet the needs of both the public and private sectors.
                        <br />
                        <br />
                        Students in this field can develop knowledge and expertise in various areas, such as software development, data science and technology, and computer networking. They have the potential to conduct high-quality research, solve problems, and continuously enhance themselves. This field provides qualifications and capabilities for employment and can be a valuable asset to all aspects of society."
                    </p>

                </div>

                <div className="z-0 -ml-80">
                    <img className="mx-auto h-max w-max" src="/_DSC2867.jpg" alt="" />
                </div>
            </section>

        </>
    )
}

export default page;