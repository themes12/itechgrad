import AdminNavbar from "@/components/admin/Navbar";
import React from "react";

type Props = {};

const AdminLayout = ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { degree: string };
}) => {
    const { degree } = params;
    return (
        <div>
            <AdminNavbar degree={degree} />
            <div>{children}</div>
        </div>
    );
};

export default AdminLayout;
