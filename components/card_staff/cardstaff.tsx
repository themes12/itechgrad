"use client";
import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Chip,
    Button,
    Image,
} from "@nextui-org/react";
import { AcademicStaff, CardStaffProps, SupportStaff } from "@/types/staff";
import Link from "next/link";
import ImageNext from "next/image";
import  ArrowRightIcon  from "@heroicons/react/24/outline/ArrowRightIcon";

export const CardStaff = ({
    type,
    staff,
}: {
    type: CardStaffProps;
    staff: AcademicStaff | SupportStaff;
}) => {
    let researchInterestArray: Array<string> = [];
    if (type === "academic") {
        researchInterestArray = (
            staff as AcademicStaff
        ).research_interest.split(",");

    }

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const enableButton = () => {
        setIsButtonDisabled(false);
      };

    return (
        <div>
            <div className="relative container mx-auto py-8 px-8 ">
                <div className="relative flex flex-row xxxs:flex-col md:flex-row md:pl-10 lg:pl-20 xl:pl-40 ">
                    <div className="absolute pt-4 xxxs:pl-8 md:pl-0">
                    {type === "academic" ? (
                        staff.picture.includes("data:image") ? (
                            <img src={staff.picture} alt="" className="rounded-lg " />
                        ) : (
                            <ImageNext
                                alt={`picture of ${staff.picture}`}
                                className="rounded-lg  object-cover object-center xxxs:pb-6 xxs:pb-6 xs:pb-6  w-auto  "
                                width={0}
                                height={0}
                                // sizes="100vw"
                                src={`https://cs-33ck.vercel.app/personal/lecturers${staff.picture}`}
                            />
                        )
                    ) : staff.picture.includes("data:image") ? (
                        <img src={staff.picture} className="rounded-lg " alt={`picture of ${staff.picture}`} />
                    ) : (
                        <ImageNext
                            alt={`picture of ${staff.picture}`}
                            width={0}
                            height={0}
                            // sizes="100vw"
                            className="rounded-lg  object-cover object-center xxxs:pb-6 xxs:pb-6 xs:pb-6 w-auto "
                            src={`https://cs-33ck.vercel.app/personal/staff${staff.picture}`}
                        />
                    )}
                    </div>

                    <div className="relative xxxs:pt-60 md:pt-0 xxxs:pl-0 md:pl-60 overflow-auto">
                        <div className="flex flex-col gap-5">
                            <div className="">
                                <h6 className="text-[24px] font-bold">
                                    {staff.affiliation} {staff.title}{" "}
                                    {staff.name}
                                </h6>
                                <h6 className="text-[24px] font-bold ">
                                    {staff.e_affiliation} {staff.e_title}{" "}
                                    {staff.e_name}
                                </h6>
                            </div>
                            <div>
                                {staff.position && staff.position.map((value, index) => {
                                    return (
                                        <p key={index} className="text-[18px]">
                                            {value}
                                        </p>
                                    );
                                })}
                            </div>
                            <div className="flex flex-wrap gap-x-2 gap-y-2 ">
                                {type === "academic" ? (
                                    researchInterestArray.map((value, index) =>
                                        value !== "" ? (
                                            <button 
                                                onClick={enableButton}
                                                disabled={isButtonDisabled} 
                                                key={index}
                                                color="primary"
                                                className="text-[#0E80E9] text-sm gap-8 bg-[#E7F6FD] rounded-2xl px-2 py-2  "
                                            >
                                                {value.trim()}
                                            </button>
                                        ) : (
                                            <></>
                                        )
                                    )
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <div className="flex flex-row gap-4">
                                    <div>
                                        <Image alt="Phone" src="/Phone.svg" />
                                    </div>
                                    {staff.tel && staff.tel.map((value, index) => (
                                        <div key={index}>{value}</div>
                                    ))}
                                </div>
                                <div className="flex flex-row gap-4 overflow-auto">
                                    <div>
                                        <Image alt="Mail" src="/Mail.svg" />
                                    </div>
                                    {staff.email && staff.email.map((value, index) => (
                                        <div key={index}>{value}</div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                {type === "academic" ? (
                                    <Button
                                        as={Link}
                                        href={
                                            (staff as AcademicStaff)
                                                .personal_web
                                                
                                        }
                                        target= {"_blank"}
                                        className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 
                                        bg-[#0E80E9] text-white text-[15px]"
                                        radius="full"
                                        endContent={
                                            <ArrowRightIcon className="h-4 w-4 text-white" />
                                        }
                                    >
                                        Personal Website
                                    </Button>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
