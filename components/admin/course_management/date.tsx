"use client";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Calendar } from "primereact/calendar";
import { AcademicSetting } from "@/types/setting";

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
                    className="block h-unit-10 min-h-unit-10"
                    value={date}
                    onChange={(e) => setDate(e.value ?? null)}
                    view="year"
                    dateFormat="yy"
                />
            </div>
        </>
    );
};

export default DateEditor;
