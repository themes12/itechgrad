"use client"
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Image,
    Chip,
    Button,
} from "@nextui-org/react";
import { AcademicStaff, CardStaffProps, SupportStaff } from "@/types/staff";
import Link from "next/link";

export const CardStaff = ({ type, staff }: { type: CardStaffProps, staff: AcademicStaff | SupportStaff }) => {
    let researchInterestArray: Array<string> = []
    if (type === "academic") {
        researchInterestArray = (staff as AcademicStaff).research_interest.split(",").map((value) => value.trim());
    }
    return (
        <div>
            <div className="relative container mx-auto py-8 px-8">
                <div className="relative flex flex-row xxxs:flex-col xxs:flex-col xs:flex-col sm:flex-col md:flex-row md:pl-10 lg:pl-20 xl:pl-40 ">
                    <Image
                        alt="MouckUp"
                        className="rounded-xl object-cover object-center xxxs:pb-6 xxs:pb-6 xs:pb-6 w-auto lg:h-[360px]"
                        src="https://drive.google.com/uc?export=view&id=11Q-WPNcCA_TcfZTCVsDBbDsfs7zzCcpq"
                    />

                    <div className="relative col-span-7 px-20">
                        <div className="flex flex-col gap-5">
                            <div className="">
                                <h6 className="text-[24px] font-bold">
                                    {staff.affiliation} {staff.title} {staff.name}
                                </h6>
                                <h6 className="text-[24px] font-bold ">
                                    {staff.e_affiliation} {staff.e_title} {staff.e_name}
                                </h6>
                            </div>
                            <div>
                                {staff.position.map((value, index) => {
                                    return <p key={index} className="text-[18px]">
                                        {value}
                                    </p>
                                })}
                            </div>
                            <div className="flex flex-wrap gap-x-2 gap-y-2">
                                {
                                    type === "academic" ? researchInterestArray.map((value, index) => value !== '' ? <Chip
                                        key={index}
                                        color="primary"
                                        className="text-black text-[14px] gap-8 bg-[#E7F6FD] "
                                    >
                                        {value}
                                    </Chip> : <></>)
                                        : <></>
                                }
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <div className="flex flex-row gap-4">
                                    <div>
                                        <Image alt="Phone" src="/Phone.svg" />
                                    </div>
                                    {
                                        staff.tel.map((value, index) => <div key={index}>{value}</div>)
                                    }
                                </div>
                                <div className="flex flex-row  gap-4">
                                    <div>
                                        <Image alt="Mail" src="/Mail.svg" />
                                    </div>
                                    {
                                        staff.email.map((value, index) => <div key={index}>{value}</div>)
                                    }
                                </div>
                            </div>
                            <div>
                                {
                                    type === "academic" ? <Button
                                        as={Link}
                                        href={(staff as AcademicStaff).personal_web}
                                        className="bg-[#054563] text-white text-[15px]"
                                        radius="full"
                                        endContent={
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="m2 12h20m-9-9 9 9-9 9"
                                                    fill="none"
                                                    stroke="#ffff"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        }
                                    >
                                        Personal Website
                                    </Button> : <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
