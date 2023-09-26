import React from "react";
import {Spacer} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image,Chip,Button} from "@nextui-org/react";
import {LinkNext} from './LinkNext';
import {Mail} from './Mail';
import {Phone} from './Phone';

//import { acaStaff } from "@/types/academicstaffsec";
//export const CardStaff = ({ nameThai, rank, nameEng, Tel, email, ResearchInterests, href, image}:acaStaff) =>

export const CardStaff = () =>
    {
        return <div>
        <div className="relative container mx-auto py-8 px-8">
            <div className="relative grid grid-cols-12 md:grid-cols-12">
                <div className="block relative col-span-5 pl-40 md:cover">
                    <Image
                      alt="MouckUp"
                        className="rounded-xl object-cover object-center "
                        src="https://drive.google.com/uc?export=view&id=11Q-WPNcCA_TcfZTCVsDBbDsfs7zzCcpq" 
                        
                        />
                </div>

                <div className="relative col-span-7 px-20">
                    <div className="flex flex-col gap-5">
                        <div className="">
                            <h6 className="text-[24px] font-bold ">ผู้ช่วยศาสตราจารย์ ดร.วิจักษณ์ ศรีสัจจะเลิศวาจา</h6>
                            <h6 className="text-[24px] font-bold ">Assistant Professor Dr.Wijak Srisujjalertwaja</h6>
                        </div>
                        <div className="">
                            <p className="text-[18px]">รักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์</p>
                            <p className="text-[18px]">ผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์</p>
                        </div>
                        <div className="relative gap-x-2 gap-y-2">
                            <Chip color="primary" className="relative text-black text-[14px] gap-8 bg-[#E7F6FD]">Recommender System</Chip>
                            <Chip color="primary" className="relative text-black text-[14px] bg-[#E7F6FD]">Security management</Chip>
                            <Chip color="primary" className="relative text-black text-[14px] bg-[#E7F6FD]">Webservice</Chip>
                            <Chip color="primary" className="relative text-black text-[14px] bg-[#E7F6FD]">Ontology and semantic</Chip>
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <div className="flex flex-row gap-4">
                                <div>
                                    <Image
                                        alt="Phone"
                                        src="/Phone.svg" />
                                </div>
                                <div>053-943412 ต่อ 124</div>
                            </div>
                            <div className="flex flex-row  gap-4">
                                <div>
                                    <Image
                                        alt="Mail"
                                        src="/Mail.svg" />
                                </div>
                                <div>wijak.cscmu@gmail.com</div>
                            </div>
                        </div>
                        <div className="">
                            <Button className="bg-[#054563] text-white text-[15px]" radius="full" endContent={<LinkNext />}>
                                Personal Website
                            </Button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>;
        
        
        /*<div>
            <div className="relative container mx-auto py-8 px-8">
                <div className="relative grid grid-cols-12 md:grid-cols-12">
                    <div className="relative col-span-5 pl-40">
                        <Image
                          alt="MouckUp"
                            className="rounded-xl object-cover object-center "
                            src="https://drive.google.com/uc?export=view&id=11Q-WPNcCA_TcfZTCVsDBbDsfs7zzCcpq" 
                            
                            />
                    </div>

                    <div className=" col-span-7 px-20">
                        <div className="flex flex-col gap-5">
                            <div className="">
                                <h6 className="text-[24px] font-bold ">ผู้ช่วยศาสตราจารย์ ดร.วิจักษณ์ ศรีสัจจะเลิศวาจา</h6>
                                <h6 className="text-[24px] font-bold ">Assistant Professor Dr.Wijak Srisujjalertwaja</h6>
                            </div>
                            <div className="">
                                <p className="text-[18px]">รักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์</p>
                                <p className="text-[18px]">ผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์</p>
                            </div>
                            <div className="relative gap-2 ">
                                <Chip color="primary" className="relative text-black text-[14px] gap-8 bg-[#E7F6FD]">Recommender System</Chip>
                                <Chip color="primary" className="relative text-black text-[14px] bg-[#E7F6FD]">Security management</Chip>
                                <Chip color="primary" className="relative text-black text-[14px] bg-[#E7F6FD]">Webservice</Chip>
                                <Chip color="primary" className="relative text-black text-[14px] bg-[#E7F6FD]">Ontology and semantic</Chip>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <div className="flex flex-row gap-4">
                                    <div>
                                        <Image
                                            alt="Phone"
                                            src="/Phone.svg" />
                                    </div>
                                    <div>053-943412 ต่อ 124</div>
                                </div>
                                <div className="flex flex-row  gap-4">
                                    <div>
                                        <Image
                                            alt="Mail"
                                            src="/Mail.svg" />
                                    </div>
                                    <div>wijak.cscmu@gmail.com</div>
                                </div>
                            </div>
                            <div className="">
                                <Button className="bg-[#054563] text-white text-[15px]" radius="full" endContent={<LinkNext />}>
                                    Personal Website
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>;*/
    }