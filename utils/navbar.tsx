import { navbar } from "@/types/navbar";

export const navItems: navbar[] = [
    {
        title: "home",
        type: "button",
        href: "/home"
    },                                                                                                                                                  
    {
        title: "program",
        type: "dropdown",
        options: [
            {
                title: "mater's degree",
                href: "/program/master-degree"
            },
            {
                title: "PHD",
                href: "/program/phd"
            }
        ]
    },
    { 
        title: "courses",
        type: "dropdown",
        options: [
            {
                title: "กระบวนวิชา ป.โท",
                href: "/courses/master-degree-course"
            },
            {
                title: "กระบวนวิชา ป.เอก",
                href: "/courses/phd-course"
            }
        ]
    },
    {
        title: "research",
        type: "button",
        href: "/research"
    },
    {
        title: "announcement",
        type: "dropdown",
        options: [
            {
               title: "announcement",
               href: "/announcement" 
            },
            {
                title: "congratulations",
                href: "/congratulations" 
            },
            {
                title: "news",
                href: "/news" 
            },
        ]
    },
    {
        title: "staff",
        type: "dropdown",
        options: [
            {
                title: "academic staff",
                href: "/staff/academic"
            },
            {
                title: "supporting staff",
                href: "/staff/supporting-staff"
            }
        ]
    },
    {
        title: "about",
        type: "dropdown",
        options: [
            {
                title: "history",
                href: "/about/history"
            },
            {
                title: "vision",
                href: "/about/vision"
            },
            {
                title: "head of department",
                href: "/about/head-of-department"
            },
        ]
    },
]