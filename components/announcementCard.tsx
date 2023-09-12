import { useState } from "react";
import {
    Link,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Progress,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { CardProps } from "@/types/card";

const AnnouncementCard = ({ title, body, href, image }: CardProps) => {
    const router = useRouter();
    return (
        <Card
            isFooterBlurred
            isPressable
            onPress={() => router.push(href ?? "#")}
            className="w-full h-[370px] col-span-12 sm:col-span-7"
        >
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={`https://picsum.photos/seed/${image}/750`}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div className="px-4 text-start">
                    <h5 className="text-xl text-[#1A202E] font-bold line-clamp-1">
                        {title}
                    </h5>
                    <h4 className="text-[#1A202E] font-normal text-base line-clamp-3">
                        {body}
                    </h4>
                </div>
            </CardFooter>
        </Card>
    );
};

export default AnnouncementCard;
