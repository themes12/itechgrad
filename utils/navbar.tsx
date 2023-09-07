import { navbar } from "@/types/navbar";

export const navItems: navbar[] = [
    {
        title: "about",
        type: "dropdown",
        options: [
            {
                title: "history",
                href: "#"
            },
            {
                title: "vision",
                href: "#"
            },
            {
                title: "head of department",
                href: "#"
            },
            {
                title: "staff",
                href: "#"
            },
        ]
    },
    {
        title: "program",
        type: "dropdown",
        options: [
            {
                title: "mater's degree 66",
                href: "#"
            },
            {
                title: "mater's degree 61",
                href: "#"
            },
            {
                title: "PHD",
                href: "#"
            }
        ]
    },
    {
        title: "courses",
        type: "dropdown",
        options: [
            {
                title: "กระบวนวิชา ป.โท",
                href: "#"
            },
            {
                title: "กระบวนวิชา ป.เอก",
                href: "#"
            }
        ]
    },
    {
        title: "research",
        type: "button",
    },
    {
        title: "announcement",
        type: "dropdown",
        options: [
            {
               title: "announcement",
               href: "#" 
            },
            {
                title: "congratulations",
                href: "#" 
            },
            {
                title: "news",
                href: "#" 
            },
        ]
    }
]