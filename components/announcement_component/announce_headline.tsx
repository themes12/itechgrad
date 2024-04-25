import React from "react";

import {Chip, Image} from "@nextui-org/react";

type Props = {};

const AnnounceHeadline = (props: Props) => {
    return (
    <div className="flex flex-col gap-6">
        {/* headline */}
        <div className="flex flex-col gap-6 bg-[#262626]">
            <div className="flex flex-wrap justify-start gap-4 items-center">
                <Chip size="lg" className="bg-zinc-50 text-blue-500">Announcement</Chip>
                <Chip variant="light" className="text-white">29/09/2566</Chip>
            </div>
            <div className="flex flex-wrap justify-start gap-4">
                <div className=" text-4xl font-semibold text-white">
                    {/* ชื่อหัวข้อ */}
                    Powerful Trading Tools and Features for Experienced Investors
                </div>
            </div>
        </div>
        
    </div>

    );
};

export default AnnounceHeadline;