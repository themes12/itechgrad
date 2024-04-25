import React, { useState } from "react";
import { Divider, Image } from "@nextui-org/react";
import { Pagination, Button, Input } from "@nextui-org/react";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Announcement_card = () => {
    const t = useTranslations("Annoucement");
    return (
        <div className="px-8">
            <Link href="/announcement/adv">
                <div className="grid md:grid-cols-12 gap-6 md:gap-4 mb-20 animate-slideB bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl transition ease-in-out duration-500">
                    <div className="col-span-6 md:col-span-6">
                        <p className="text-[#1C5CFF] text-[16px] font-[500] leading-normal">
                            Announcement
                        </p>
                        <div>
                            <p
                                className={`font-[700] text-[30px] text-[#1E1E1E] leading-normal pt-[20px] pb-[20px]`}
                            >
                                {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
                                    Powerful Trading Tools and Features for Experienced Investors
                                {/* </a> */}
                            </p>
                            <p
                                className="font-[400] text-[15px] text-[#7D7D7D] leading-normal pt-[20px] pb-[20px] max-w-[85%]"
                            >
                                I’m always trying to think of new and interesting business
                                ideas. I generally try to come up with ideas by thinking of what
                                I would want to do or see in the world. Then, I try to find
                                reasons why it wouldn’t work...
                            </p>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-6 flex items-center justify-center">
                        <div className="image-container">
                            <Image
                                alt=""
                                className="flex object-cover aspect-video lg:h-[300px] w-auto md:h-[300px]"
                                src={`https://picsum.photos/seed/${Image}/750`}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
