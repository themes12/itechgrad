import React from "react";

import {Chip, Image} from "@nextui-org/react";

type Props = {};

const AnnounceHeadline = (props: Props) => {
    return (
    <div className="flex flex-col gap-6 bg-[#262626]">
        <div className="flex flex-wrap gap-2 items-center bg-[#262626]">
            <Chip size="lg" className="bg-zinc-50 text-blue-500">Announcement</Chip>
            <Chip variant="light" className="text-neutral-50">Day 29/09/2566</Chip>
        </div>
        <div className="flex flex-wrap gap-4 items-center bg-[#262626]">
            <div className="text-5xl font-semibold text-white">
                {/* ชื่อหัวข้อ */}
                Powerful Trading Tools and Features for Experienced Investors
            </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center bg-[#262626]">
            <div className="w-96 h-3/4">
                <Image
                    isZoomed
                    width={1180}
                    height={660}
                    alt="NextUI Fruit Image with Zoom"
                    src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                />
            </div>
        </div>
    </div>

    );
};

export default AnnounceHeadline;