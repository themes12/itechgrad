"use client";
import React, { useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { Calendar } from "primereact/calendar";
import { AcademicSetting } from "@/types/setting";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from 'next-intl/link';

const DateEditor = ({ semester, year }: AcademicSetting) => {
    const [date, setDate] = useState<null | Date>(new Date(year));
    const [selectedSemester, setSelectedSemester] = useState(
        new Set([String(semester)])
    );

    const handleSelectionChange = (e) => {
        setSelectedSemester(new Set([e.target.value]));
    };

    return (
        <>
            <div className="flex flex-row w-full gap-3">
                <Select
                    labelPlacement="outside"
                    label="ภาคการศึกษา"
                    placeholder="เลือกภาคการศึกษา"
                    className="max-w-xs"
                    selectedKeys={selectedSemester}
                    selectionMode="single"
                    onChange={handleSelectionChange}
                >
                    <SelectItem key="1" value="1">
                        ภาคการศึกษาที่ 1
                    </SelectItem>
                    <SelectItem key="2" value="2">
                        ภาคการศึกษาที่ 2
                    </SelectItem>
                </Select>
                <div>
                    <label className="block">เลือกปีการศึกษา</label>
                    <Calendar
                        className="mt-0.5 block h-unit-10 min-h-unit-10"
                        value={date}
                        onChange={(e) => setDate(e.value ?? null)}
                        view="year"
                        dateFormat="yy"
                    />
                </div>
            </div>
            <Button as={Link} href="/admin/master-degree/course-management/create" color="success" startContent={<PlusIcon className="h-6 w-6" />}>
                เพิ่มรายวิชา
            </Button>
        </>
    );
};

export default DateEditor;
