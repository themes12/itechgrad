"use client";
import NextImage from "next/image";
import Spline from "@splinetool/react-spline";
import { Button, Image } from "@nextui-org/react";
import Section from "@/components/section";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionText from "@/components/sectionText";
import AnnouncementCard from "@/components/announcementCard";
import Carousal from "@/components/carousal";

export default function Home() {
    const posts = [
        {
            id: 1,
            title: "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
            body: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            image_url: "aa6b4653-fb92-4c2d-af4e-ec24fc9f3d73",
        },
        {
            id: 2,
            title: "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
            body: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            image_url: "4fc5fa39-8512-4cc8-96d0-226fe89ee9fb",
        },
        {
            id: 3,
            title: "id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
            body: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            image_url: "ab31928a-261e-4cc8-8fb1-857c168ed23a",
        },
        {
            id: 4,
            title: "morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
            body: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            image_url: "6bfb59f3-c1e4-429b-b373-afa655e61a1b",
        },
        {
            id: 5,
            title: "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
            body: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            image_url: "612ffb14-f5a5-41be-8db2-53f6804572de",
        },
        {
            id: 6,
            title: "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
            body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            image_url: "90c78816-3bc6-48e3-80f9-d9a65e0fc3fe",
        },
        {
            id: 7,
            title: "donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
            body: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            image_url: "fe61dce4-9837-4508-99e0-3f8dd82ff4f0",
        },
        {
            id: 8,
            title: "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
            body: "Fusce consequat. Nulla nisl. Nunc nisl.",
            image_url: "908e1b70-820a-4209-9b71-4bf7536b0fb6",
        },
        {
            id: 9,
            title: "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",
            body: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            image_url: "6c005086-4015-43e5-b3ab-5740055b1796",
        },
        {
            id: 10,
            title: "donec vitae nisi nam ultrices libero non mattis pulvinar nulla",
            body: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            image_url: "f7ac2279-c41f-4d43-8311-d31a3d0a8df1",
        },
        {
            id: 11,
            title: "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
            body: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            image_url: "25dbe862-0a6d-4b57-ab73-0fbfad2cfd95",
        },
        {
            id: 12,
            title: "erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst",
            body: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            image_url: "a5657037-4e14-4038-be28-f3703bf1a946",
        },
        {
            id: 13,
            title: "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
            body: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            image_url: "063dd16e-3aa8-4297-9c3d-5f80cd8dc66f",
        },
        {
            id: 14,
            title: "aliquet massa id lobortis convallis tortor risus dapibus augue vel",
            body: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            image_url: "bd6e05a9-3d96-48e5-8703-68dd44d31c04",
        },
        {
            id: 15,
            title: "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
            body: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            image_url: "999f5318-9694-468a-b9cc-e8f473b17485",
        },
        {
            id: 16,
            title: "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
            body: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            image_url: "7df457ba-1b08-4acc-b8bb-37e2b365c396",
        },
        {
            id: 17,
            title: "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
            body: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            image_url: "b1897b73-4ac3-44f9-a4d2-2c7f30dac0b4",
        },
        {
            id: 18,
            title: "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
            body: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            image_url: "fbe0d4fd-0503-464e-b9f6-c9bcea880155",
        },
        {
            id: 19,
            title: "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
            body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image_url: "2048f42f-5efb-4422-af94-645a59ffb4f9",
        },
        {
            id: 20,
            title: "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum",
            body: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            image_url: "2788476b-972d-4e83-b3cc-cf1fb62df678",
        },
    ];
    return (
        <main className="space-y-8">
            <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                <div className="space-y-4">
                    <h2 className="font-bold text-4xl xxs:text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl text-[#002F43]">
                        Master and Ph.D Program in
                    </h2>
                    <h2 className="font-extrabold text-5xl xxs:text-6xl xs:text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFB724]">
                        Computer Science CMU
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row mt-8 lg:mt-16 justify-evenly lg:mx-20 gap-x-10 gap-y-2">
                    <div className="w-full lg:w-5/12">
                        <h5 className="font-normal text-[#515151] text-lg">
                            Department of Computer Science <br /> Faculty of
                            Science, Chiang Mai University
                        </h5>
                        <Button
                            className="my-2 lg:mt-10 px-7 text-xl font-medium text-white bg-[#262626] hover:bg-[#515151]"
                            radius="md"
                            size="lg"
                            endContent={<ArrowRightIcon className="h-5 w-5" />}
                        >
                            View program
                        </Button>
                    </div>
                    <div className="w-full lg:w-7/12 h-max rounded-xl">
                        <Spline scene="https://prod.spline.design/TXvSKMFlAWim57Di/scene.splinecode" />
                    </div>
                </div>
            </Section>
            <Section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12">
                <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
                    <SectionText name="Announcement" />
                    <div className="mt-8">
                        <Carousal>
                            {posts.map((item, index) => (
                                <AnnouncementCard
                                    key={item.id}
                                    title={item.title}
                                    body={item.body}
                                    href={`posts/${item.id}`}
                                    image={item.image_url}
                                />
                            ))}
                        </Carousal>
                    </div>
                </div>
            </Section>
            <Section className="py-6">
                <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
                    <SectionText name="Congratulations" />
                    <div className="mb-24 relative mt-8">
                        <Image
                            className="z-0 w-full h-full object-cover rounded-lg"
                            src="/congratulation.svg"
                            alt=""
                        />
                        <div className="w-2/5 p-6 rounded-xl absolute left-16 -bottom-4 bg-white shadow-md">
                            <h6 className="text-[#181A2A] text-2xl font-semibold">
                                The Impact of Technology on the Workplace: How
                                Technology is Changing
                            </h6>
                            <p className="text-[#97989F] text-sm font-sm mt-2">
                                August 20, 2022
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
