"use client";
import { Button } from "@nextui-org/react";
import { Link } from "@/navigation";

type Props = {};

const page = () => {
    return (
        <div className="w-full flex h-screen justify-center items-center">
            <div className="bg-gray-200 shadow-md p-4 flex flex-col rounded-lg">
                <h1 className="font-bold text-4xl text-center">
                    เลือกหน้าที่ต้องการแก้ไข
                </h1>
                <div className="flex flex-row gap-4 mt-3">
                    <div className="mr-auto">
                        <Button
                            size="lg"
                            color="primary"
                            href="/admin/master-degree/course-management"
                            as={Link}
                            fullWidth
                        >
                            Master Degree
                        </Button>
                    </div>
                    <div className="ml-auto">
                        <Button
                            size="lg"
                            color="primary"
                            href="/admin/phd/course-management"
                            as={Link}
                            fullWidth
                        >
                            Ph.D.
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
