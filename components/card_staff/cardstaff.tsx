import React from "react";
import {Spacer} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image,Chip,Button} from "@nextui-org/react";
import "./cardstaff.css"
import {LinkNext} from './LinkNext';
import {Mail} from './Mail';
import {Phone} from './Phone';
export const CardStaff = () =>
    <div>
        <div className="retative container mx-auto 'md': '768px' px-60 py-8">
            <div className="relative flex flex-row gap-4 ">
                <div className="relative">
                    <Image
                        width={400}
                        
                        alt="MouckUp"
                        className="h-full w-auto object-cover rounded-xl "
                        src="/MockUp1.jpg" />
                </div>

                <div className="relative px-20 flex flex-col gap-6">
                    <div className="relative">
                        <h6 className="text-[24px] font-bold ">ผู้ช่วยศาสตราจารย์ ดร.วิจักษณ์ ศรีสัจจะเลิศวาจา</h6>
                        <h6 className="text-[24px] font-bold ">Assistant Professor Dr.Wijak Srisujjalertwaja</h6>
                    </div>
                    <div className="relative">
                        <p className="text-[18px]">รักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์</p>
                        <p className="text-[18px]">ผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์</p>
                    </div>
                    <div className="flex gap-2 relative">
                        <Chip color="primary" className="text-black text-[14px] gap-8 bg-[#E7F6FD]">Recommender System</Chip>
                        <Chip color="primary" className="text-black text-[14px] bg-[#E7F6FD]">Security management</Chip>
                        <Chip color="primary" className="text-black text-[14px] bg-[#E7F6FD]">Webservice</Chip>
                        <Chip color="primary" className="text-black text-[14px] bg-[#E7F6FD]">Ontology and semantic</Chip>
                    </div>
                    <div className="flex flex-col gap-3 relative">
                        <div className="flex flex-row gap-4">
                            <div>
                                <Image
                                    alt="Phone"
                                    src="/Phone.svg" />
                            </div>
                            <div>053-943412 ต่อ 124</div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div>
                                <Image
                                    alt="Mail"
                                    src="/Mail.svg" />
                            </div>
                            <div>wijak.cscmu@gmail.com</div>
                        </div>
                    </div>
                    <div className="relative">
                        <Button className="bg-[#054563] text-white text-[15px]" radius="full" endContent={<LinkNext />}>
                            Personal Website
                        </Button>
                    </div>


                </div>


            </div>
        </div>
    </div>