"use client";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "@/navigation";

const DateEditor = ({ degree }: { degree: string }) => {
    return (
        <>
            <Button
                as={Link}
                href={`/admin/${degree}/program-management/create`}
                color="success"
                startContent={<PlusIcon className="h-6 w-6" />}
            >
                เพิ่มหลักสูตร
            </Button>
        </>
    );
};

export default DateEditor;
