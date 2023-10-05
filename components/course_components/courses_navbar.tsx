"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import "@/components/course_components/course_navbar.css";
import { SettingCourse } from "@/types/setting";
import { useLocale } from "next-intl";
import { TabMenu } from "primereact/tabmenu";
import { Link } from "@/navigation";
import { useParams } from "next/navigation";

function CourseNavbar({ setting }: { setting: SettingCourse }) {
    const locale = useLocale();
    const { degree } = useParams();

    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            label: `Recent courses ${setting?.semester}/${
                locale === "th"
                    ? new Date(setting.year).getFullYear() + 543
                    : new Date(setting.year).getFullYear()
            }`,
            template: (options: any) => (
                <Button
                    as={Link}
                    href={`/courses/${degree}`}
                    variant="light"
                    radius="sm"
                    className="text-base font-medium"
                    onClick={(e) => setActiveIndex(0)}
                >
                    {options.label}
                </Button>
            ),
        },
        {
            label: "All courses",
            template: (options: any) => (
                <Button
                    as={Link}
                    href={`/courses/${degree}/all`}
                    variant="light"
                    radius="sm"
                    className="text-base font-medium"
                    onClick={(e) => setActiveIndex(1)}
                >
                    {options?.label}
                </Button>
            ),
        },
    ];

    return (
        <>
            <div>
                <div className="navbar_course flex flex-col md:flex-row">
                    <div className="lg:w-1/2">
                        {/* TabMenu */}
                        <TabMenu
                            model={items}
                            activeIndex={activeIndex}
                            onTabChange={(e) => setActiveIndex(e.index)}
                        />
                    </div>
                    <div className="lg:w-1/2">
                        {/* Search Input */}
                        <div className="search_bar">
                            <Input
                                className="search-input"
                                placeholder="Search..."
                                width="200px"
                            />
                        </div>
                    </div>
                </div>
                <div className="border_line"></div>
                <div className=""></div>
            </div>
        </>
    );
}

export default CourseNavbar;
