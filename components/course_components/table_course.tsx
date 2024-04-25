// import "@/components/course_components/table_courses.css";
"use client"
import React from "react";
import { MyModal } from "@/components/course_components/phdPageInner";
import { Pagination, Button } from "@nextui-org/react";
import { Course } from "@/types/course";
import { SettingCourse } from "@/types/setting";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Header from "./header";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";

export const Table_courses = ({
    courses,
    // setting,
}: {
    courses: Course[];
    // setting: SettingCourse;
}) => {
    return (
        <div>
            <Header />
            <Table>
                <TableHeader>
                    <TableColumn key="1" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]">รหัสวิชา</TableColumn>
                    <TableColumn key="2" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]">ชื่อวิชา</TableColumn>
                    <TableColumn key="3" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]"><></></TableColumn>
                </TableHeader>
                <TableBody>
                    {courses.map((course: Course) =>
                        <TableRow key={course.attributes.course_id}>
                            <TableCell className="text-center">
                                <span className="bg-[#262626] rounded-xl px-4 py-1.5 font-medium xs:text-sm text-white text-xs">
                                    {course.attributes.course_id}
                                </span>
                            </TableCell>
                            <TableCell>
                                <p className="font-semibold text-base">
                                    {course.attributes.name_en}
                                </p>
                                <p className="font-normal text-base">
                                    {course.attributes.name_th}
                                </p>
                            </TableCell>
                            <TableCell>
                                <MyModal course={course} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};
