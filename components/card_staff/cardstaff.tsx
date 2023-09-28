import React from "react";
import { Spacer } from "@nextui-org/react";
import {
    Card,
    CardHeader,
    CardBody,
    Image,
    Chip,
    Button,
} from "@nextui-org/react";
// import {LinkNext} from './LinkNext';
// import {Mail} from './Mail';
// import {Phone} from './Phone';


//import { acaStaff } from "@/types/academicstaffsec";
//export const CardStaff = ({ nameThai, rank, nameEng, Tel, email, ResearchInterests, href, image}:acaStaff) =>
type Props = {type: "acdemicStaff"|"supportStaff"}

export const CardStaff = ({type}: Props) =>
    {
        return <div>
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
                                <h6 className="text-[24px] font-bold ">
                                    ผู้ช่วยศาสตราจารย์ ดร.วิจักษณ์
                                    ศรีสัจจะเลิศวาจา
                                </h6>
                                <h6 className="text-[24px] font-bold ">
                                    Assistant Professor Dr.Wijak
                                    Srisujjalertwaja
                                </h6>
                            </div>
                            <div className="">
                                <p className="text-[18px]">
                                    รักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์
                                </p>
                                <p className="text-[18px]">
                                    ผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ
                                    คณะวิทยาศาสตร์
                                </p>
                            </div>
                            <div className="relative gap-x-2 gap-y-2">
                                <Chip
                                    color="primary"
                                    className="relative text-black text-[14px] gap-8 bg-[#E7F6FD]"
                                >
                                    Recommender System
                                </Chip>
                                <Chip
                                    color="primary"
                                    className="relative text-black text-[14px] bg-[#E7F6FD]"
                                >
                                    Security management
                                </Chip>
                                <Chip
                                    color="primary"
                                    className="relative text-black text-[14px] bg-[#E7F6FD]"
                                >
                                    Webservice
                                </Chip>
                                <Chip
                                    color="primary"
                                    className="relative text-black text-[14px] bg-[#E7F6FD]"
                                >
                                    Ontology and semantic
                                </Chip>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <div className="flex flex-row gap-4">
                                    <div>
                                        <Image alt="Phone" src="/Phone.svg" />
                                    </div>
                                    <div>053-943412 ต่อ 124</div>
                                </div>
                                <div className="flex flex-row  gap-4">
                                    <div>
                                        <Image alt="Mail" src="/Mail.svg" />
                                    </div>
                                    <div>wijak.cscmu@gmail.com</div>
                                </div>
                            </div>
                            <div className="">
                                <Button
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
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
                                };
   