"use client";
import NextImage from "next/image";
import Spline from "@splinetool/react-spline";
import { Button, Image } from "@nextui-org/react";
import Section from "@/components/section";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionText from "@/components/sectionText";
import AnnouncementCard from "@/components/announcementCard";
import Carousal from "@/components/carousal";
import { useTranslations } from "next-intl";

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
    const t = useTranslations("Index");

    return (
        <main className="space-y-8">
            <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                <div className="space-y-4 mt-6 md:mt-10 lg:mt-16">
                    <h2 className="font-bold text-xl md:text-5xl lg:text-[74px] xl:text-[74px] text-[#262626] text-center">
                        {t("header1")}
                    </h2>
                    <h2 className="font-bold text-2xl md:text-6xl lg:text-[92px] xl:text-[92px] text-[#5EAAF0] text-center">
                        {t("header2")}
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row mt-8 lg:mt-16 justify-evenly lg:mx-20 gap-x-10 gap-y-2">
                    <div className="w-full lg:w-5/12">
                        <h5 className="font-normal text-[#515151] text-[11px] md:text-[14px] lg:text-[18px]">
                            Department of Computer Science <br /> 
                            Faculty of Science, Chiang Mai University
                        </h5>
                        <Button
                            className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300 
                            my-2 lg:mt-10 px-7 text-xl font-regular text-white bg-[#5EAAF0] hover:bg-[#3E99ED] rounded-3xl"
                            size="lg"
                            endContent={<ArrowRightIcon className="h-5 w-5" />}
                        >
                            about program
                        </Button>
                    </div>
                    <div className="w-full lg:w-7/12 h-96 rounded-xl aspect-square	">
                        <Spline scene="https://prod.spline.design/FPmjVxMXmGo3Jvvo/scene.splinecode" />
                    </div>
                </div>
            </Section>
            <Section className="bg-gradient-to-r from-[#d1e0d8]/70 to-[#76b9cd]/70 py-12">
                <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
                    <SectionText name="Announcement"/>
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
            <Section>
                <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
                    <SectionText name="Congratulations" />
                    <div className="mb-24 relative mt-8">
                        <Image
                            className="z-0 w-full h-full object-cover rounded-lg aspect-video"
                            src="/congratulation.svg"
                            alt=""
                        />
                        <div className="w-11/12 md:w-1/2 lg:w-2/5 p-3 sm:p-6 rounded-xl absolute left-0 right-0 -bottom-28 xxxs:-bottom-20 xxs:-bottom-12 xs:-bottom-16 sm:-bottom-16 md:-bottom-4 md:left-16 bg-white shadow-md">
                            <h6 className="text-[#181A2A] text-base sm:text-lg md:text-2xl font-semibold">
                                The Impact of Technology on the Workplace: How
                                Technology is Changing
                            </h6>
                            <p className="text-[#97989F] text-xs md:text-sm font-sm mt-2">
                                August 20, 2022
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-col md:flex-row justify-end space-y-5 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9">
                    <div className="block w-full md:relative md:w-2/3 lg:w-3/4 h-96 my-auto">
                        <div className="block md:absolute -right-7 w-full h-full">
                            <iframe
                                className="w-full h-full rounded-xl shadow-xl"
                                src="https://maps.google.com/maps?q=RX33%2BG26%20%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%AA%E0%B8%B8%E0%B9%80%E0%B8%97%E0%B8%9E%20%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%2050200&t=m&z=18&output=embed&iwloc=near"
                            ></iframe>
                        </div>
                    </div>
                    <div className="bg-[#E8E8E8] shadow-lg w-full md:w-1/3 lg:w-1/4 px-8 md:pl-16 md:pr-10 space-y-6 py-8">
                        <div>
                            <h5 className="text-[#002F43] text-lg font-bold underline underline-offset-2">
                                Address
                            </h5>
                            <p className="text-sm font-normal">
                                Department of Computer Science Faculty of
                                Science Chiang Mai University 239 Huay Kaew
                                Road, Suthep Subdistrict, Mueang District,
                                Chiang Mai Province 50200
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-[#002F43] text-lg font-bold underline underline-offset-2">
                                Contact us
                            </h5>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">
                                    โทรศัพท์
                                </p>
                                <p className="text-sm font-light">
                                    0-5394-3412-16
                                </p>
                                <p className="text-sm font-light">
                                    063-080-7969
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">ธุรการ</p>
                                <p className="text-sm font-light">
                                    กด 0 หรือ 101
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">
                                    หลักสูตรปริญญาโท-เอก
                                </p>
                                <p className="text-sm font-light">กด 105</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">E-mail</p>
                                <p className="text-sm font-light">
                                    compsci@cmu.ac.th
                                </p>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-[#002F43] text-lg font-bold underline underline-offset-2">
                                Follow us
                            </h5>
                            <div className="flex gap-3">
                                <button>
                                    <Image
                                        width="32"
                                        height="32"
                                        src="https://img.icons8.com/color/32/facebook-new.png"
                                        alt="facebook-new"
                                    />
                                </button>
                                <button>
                                    <Image
                                        width="32"
                                        height="32"
                                        src="https://img.icons8.com/color/32/line-me.png"
                                        alt="line-me"
                                    />
                                </button>
                                <button>
                                    <Image
                                        width="32"
                                        height="32"
                                        src="https://img.icons8.com/color/32/instagram-new--v1.png"
                                        alt="instagram-new--v1"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
