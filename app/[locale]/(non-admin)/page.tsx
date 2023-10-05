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
import { Link } from "@/navigation";

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
    ];
    const t = useTranslations("Index");

    return (
        <main className="space-y-16">
            <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                <div className="space-y-4 mt-6 md:mt-10 lg:mt-16">
                    <h2 className="font-bold text-xl md:text-5xl lg:text-[74px] xl:text-[74px] text-[#262626] text-center animate-fadeIn">
                        {t("header1")}
                    </h2>
                    <h2 className="font-bold text-2xl md:text-6xl lg:text-[92px] xl:text-[92px] text-[#FFC550] text-center animate-fadeIn">
                        {t("header2")}
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row mt-8 lg:mt-16 justify-evenly lg:mx-20 gap-x-10 gap-y-2">
                    <div className="w-full lg:w-5/12">
                        <h5 className="font-normal text-[#515151] text-[11px] md:text-[14px] lg:text-[18px] animate-fadeIn">
                            {t("header3")} <br />
                            {t("header4")}
                        </h5>
                        <Button
                            className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 
                            my-2 lg:mt-10 px-7 text-xl font-regular text-white bg-[#515151] hover:bg-[#262626] rounded-3xl animate-fadeIn"
                            size="lg"
                            endContent={<ArrowRightIcon className="h-5 w-5" />}
                            as={Link}
                            href="/program/master-degree"
                        >
                            {t("button1")}
                        </Button>
                    </div>
                    <div className="w-full lg:w-7/12 h-96 rounded-xl aspect-square">
                        <iframe
                            src="https://my.spline.design/untitledcopy-b0520e6797aabf094a8a8f8c2b055eeb/"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                        ></iframe>
                        {/* <Spline scene="https://prod.spline.design/arhPmRi2xQ2PqhM1/scene.splinecode" /> */}
                        {/* <Spline scene="https://prod.spline.design/FPmjVxMXmGo3Jvvo/scene.splinecode" /> */}
                        {/* <iframe
                            className="border-none"
                            src="https://my.spline.design/untitled-61e15f9284714cf931f280e292ae5589/"
                            width="100%"
                            height="100%"
                        ></iframe> */}
                        {/* <Spline scene="https://prod.spline.design/FPmjVxMXmGo3Jvvo/scene.splinecode" /> */}
                        {/* <iframe src='https://my.spline.design/gitnesssplinetest-322630af95c0e73de65e07f3d7169434/' frameborder='0' width='100%' height='100%'></iframe> */}
                    </div>
                </div>
            </Section>
            <Section className="bg-gradient-to-r from-[#d1e0d8]/70 to-[#76b9cd]/70 py-20">
                <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9 my-8">
                    <SectionText name={t("header5")} />
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
                <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9 mb-44">
                    <SectionText name={t("header6")} />
                    <div className="mb-24 relative mt-8">
                        <Image
                            className="z-0 w-full h-full object-cover rounded-lg aspect-video"
                            src="/IMG_1712.jpg"
                            alt=""
                        />
                        <div
                            className="w-11/12 md:w-5/6 lg:w-3/6 p-3 sm:p-6 rounded-xl absolute 
                             lg:-bottom-38 xxxs:-bottom-20 xxs:-bottom-20 xs:-bottom-20 sm:-bottom-20 md:-bottom-28 left-4 md:left-14 bg-white shadow-md"
                        >
                            <h6 className="text-[#262626]  text-[12px] md:text-2xl lg:text-2xl font-semibold">
                                ขอแสดงความยินดีกับ บัณฑิต มหาบัณฑิต <br />
                                ปรัชญาดุษฎีบัณฑิต ภาควิชาวิทยาการคอมพิวเตอร์{" "}
                                <br />
                                ในพิธีพระราชทานปริญญาบัตร มช. ครั้งที่ 57
                            </h6>
                            <p className="text-[#0E80E9] text-[10px] lg:text-[14px] md:text-sm font-sm mt-2">
                                January 24, 2023
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-col md:flex-row justify-end space-y-5 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9 my-36">
                    <div className="block w-full md:relative md:w-2/3 lg:w-3/4 h-96 my-auto">
                        <div className="block md:absolute -right-5 w-full h-full">
                            <iframe
                                className="w-full h-full rounded-xl shadow-xl"
                                src="https://maps.google.com/maps?q=RX33%2BG26%20%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%AA%E0%B8%B8%E0%B9%80%E0%B8%97%E0%B8%9E%20%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%2050200&t=m&z=18&output=embed&iwloc=near"
                            ></iframe>
                        </div>
                    </div>
                    <div className="bg-[#F7FAFF] rounded-md shadow-lg w-full md:w-2/3 lg:w-2/4 px-8 md:pl-16 md:pr-10 space-y-6 py-8">
                        <div>
                            <h5 className="text-[#262626] text-lg font-bold underline underline-offset-2">
                                {t("footer1")}
                            </h5>
                            <p className="text-sm font-normal">
                                {t("footer2")}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-[#262626] text-lg font-bold underline underline-offset-2">
                                {t("footer3")}
                            </h5>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">
                                    {t("footer4")}
                                </p>
                                <p className="text-sm font-light">
                                    0-5394-3412-16
                                </p>
                                <p className="text-sm font-light">
                                    063-080-7969
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">
                                    {t("footer5")}
                                </p>
                                <p className="text-sm font-light">
                                    {t("footer6")}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">
                                    {t("footer7")}
                                </p>
                                <p className="text-sm font-light">
                                    {t("footer8")}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-extrabold text-sm">
                                    {t("footer9")}
                                </p>
                                <p className="text-sm font-light">
                                    compsci@cmu.ac.th
                                </p>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-[#262626] text-lg font-bold underline underline-offset-2">
                                {t("footer10")}
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
