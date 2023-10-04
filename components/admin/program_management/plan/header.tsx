"use client";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "@/navigation";

const DateEditor = ({
    params,
}: {
    params: { id: string; degree: string; plan_id: string };
}) => {
    const { id, degree, plan_id } = params;
    return (
        <>
            <Button
                as={Link}
                href={`/admin/${degree}/program-management/${id}/plan/create`}
                color="success"
                startContent={<PlusIcon className="h-6 w-6" />}
            >
                เพิ่มแผนการเรียน
            </Button>
        </>
    );
};

export default DateEditor;
