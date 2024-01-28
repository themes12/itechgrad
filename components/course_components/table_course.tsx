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
    setting,
}: {
    courses: Course[];
    setting: SettingCourse;
}) => {
    return (
        <div>
            <Header setting={setting} />
            <Table>
                <TableHeader>
                    <TableColumn key="1" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]">รหัสวิชา</TableColumn>
                    <TableColumn key="2" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]">ชื่อวิชา</TableColumn>
                    <TableColumn key="3" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]"><></></TableColumn>
                </TableHeader>
                <TableBody>
                    {courses.map((course) =>
                        <TableRow key={course._id}>
                            <TableCell className="text-center">
                                <span className="bg-[#262626] rounded-xl px-4 py-1.5 font-medium xs:text-sm text-white text-xs">
                                    {course._id}
                                </span>
                            </TableCell>
                            <TableCell>
                                <p className="font-semibold text-base">
                                    {course.name_en}
                                </p>
                                <p className="font-normal text-base">
                                    {course.name_th}
                                </p>
                            </TableCell>
                            <TableCell>
                                <MyModal course={course} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {/* <table>
                <thead>
                    <tr className="table-header">
                        <th className="table-header1">
                            <div className="lg:ml-20 md:px-10">
                                
                            </div>
                        </th>
                        <th className="table-header2">Course name</th>
                        <th className="table-header3"></th>
                    </tr>
                </thead>
            </table> */}
            {/* {courses.map((course) => (
                <div key={course._id} className="table-row">
                    <div className="grid grid-cols-6">
                        <div className="lg:col-start-3 lg:col-end-4  md:col-start-3 md:col-end-4  sm:col-start-2 sm:col-end-3 xs:col-start-2 xs:col-end-3 xxs:col-start-2 xxs:col-end-3">
                            <span className="bg-[#262626] rounded-full px-3 py-2 font-medium lg:text-base md:text-base sm:text-base xs:text-sm text-white xxs:text-xs xxxs:text-xs">
                                {course._id}
                            </span>
                        </div>
                    </div>

                    <span className="table-cell-2">
                        <span className="english-course-name">
                            {course.name_en}
                        </span>{" "}
                        <br />
                        <span className="thai-course-name">
                            {course.name_th}
                        </span>
                    </span>
                    <span className="table-cell-3">
                        <MyModal course={course} />
                    </span>
                </div>
            ))}{" "} */}
        </div>
    );
};
