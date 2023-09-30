"use client";
import { Course } from "@/types/course";
import { Checkbox } from "@nextui-org/react";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import axios from "axios";

const TableCheckbox = (rowData: Course) => {
    const [isSelected, setIsSelected] = useState(Boolean(rowData.is_show));
    const toast = useRef<Toast>(null);

    const handleSelected = async (isSelected: boolean) => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/course/${rowData._id}/change-show-status`,
                {
                    is_show: isSelected,
                }
            );
            toast.current?.show({
                severity: "success",
                summary: `เปลี่ยนข้อมูลรายวิชา ${rowData._id} สำเร็จ`,
                life: 3000,
            });
            setIsSelected(isSelected);
        } catch (error) {
            toast.current?.show({
                severity: "error",
                summary: "ไม่สำเร็จ",
                life: 3000,
            });
        }
    };

    return (
        <>
            <Toast ref={toast} />
            <Checkbox
                isSelected={isSelected}
                onValueChange={(isSelected) => handleSelected(isSelected)}
            />
        </>
    );
};

export default TableCheckbox;
