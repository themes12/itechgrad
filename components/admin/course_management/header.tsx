"use client";
import { useRef, useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { Calendar } from "primereact/calendar";
import { SettingCourse } from "@/types/setting";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next-intl/link";
import axios from "axios";
import { Toast } from "primereact/toast";
import { useUpdateEffect } from "@reactuses/core";

const DateEditor = ({
    setting,
    degree,
}: {
    setting: SettingCourse;
    degree: string;
}) => {
    const toast = useRef<Toast>(null);
    const [date, setDate] = useState<null | Date>(new Date(setting.year));
    const [selectedSemester, setSelectedSemester] = useState(
        new Set([String(setting.semester)])
    );

    const handleSelectionChange = (value: string) => {
        setSelectedSemester(new Set([value]));
    };

    const handleChangeSetting = async () => {
        const semester = Array.from(selectedSemester).join("");
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/setting/acdemic-year`,
                {
                    year: date,
                    semester: semester,
                }
            );
            toast.current?.show({
                severity: "success",
                summary: "อัพเดทข้อมูลแล้ว",
                life: 3000,
            });
        } catch (error) {
            toast.current?.show({
                severity: "error",
                summary: "อัพเดทข้อมูลไม่สำเร็จ",
                life: 3000,
            });
        }
    };

    useUpdateEffect(() => {
        handleChangeSetting();
        console.log("changed");
    }, [date, selectedSemester]);

    return (
        <>
            <div className="flex flex-row w-full gap-3">
                <Toast ref={toast} />
                <Select
                    labelPlacement="outside"
                    label="ภาคการศึกษา"
                    placeholder="เลือกภาคการศึกษา"
                    className="max-w-xs"
                    selectedKeys={selectedSemester}
                    selectionMode="single"
                    onChange={(e) => handleSelectionChange(e.target.value)}
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
            <Button
                as={Link}
                href={`/admin/${degree}/course-management/create`}
                color="success"
                startContent={<PlusIcon className="h-6 w-6" />}
            >
                เพิ่มรายวิชา
            </Button>
        </>
    );
};

export default DateEditor;
