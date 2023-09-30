"use client"
import { Course } from "@/types/course";
import { Button } from "@nextui-org/react";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import axios from "axios";
import { useRouter } from "next-intl/client";

type Props = {}

const Action = (rowData: Course) => {
    const router = useRouter()
    const toastConfirm = useRef<Toast>(null);
    const toast = useRef<Toast>(null);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/course/${rowData._id}`
            );
        } catch (error) {
            toast.current?.show({
                severity: "error",
                summary: "ไม่สำเร็จ",
                life: 3000,
            });
        }
    }

    const clear = async (submit: boolean) => {
        toastConfirm.current?.clear();
        if (submit) {
            await handleDelete();
            await show();
            router.refresh();
        }
    };

    const show = () => {
        toast.current?.show({
            severity: "success",
            summary: `ลบข้อมูลรายวิชา ${rowData._id} สำเร็จ`,
            life: 3000,
        });
    }

    const confirm = () => {
        toastConfirm.current?.show({
            severity: "warn",
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex w-full flex-column justify-center">
                    <div>
                        <div className="text-center">
                            <div className="font-bold text-xl my-3">ลบข้อมูลวิชา {rowData._id}?</div>
                        </div>
                        <div className="flex gap-3">
                            <Button color="danger" onClick={(e) => clear(true)}>ยืนยัน</Button>
                            <Button color="default" onClick={(e) => clear(false)}>ยกเลิก</Button>
                        </div>
                    </div>
                </div>
            )
        });
    };
    return (
        <>
            <Toast ref={toast} />
            <Toast ref={toastConfirm} position="top-right" />
            <div className="space-x-2">
                <Button color="default">
                    ดู
                </Button>
                <Button color="danger" onClick={confirm}>
                    ลบ
                </Button>
            </div>
        </>

    )
}

export default Action