"use client";
import { signOut } from "next-auth/react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link
} from "@nextui-org/react";
import { usePathname } from "@/navigation";

type Props = { degree: string };

function AdminNavbar({ degree }: Props) {
    const pathname = usePathname();
    const checkIsActive = (pathname: string, navItem: string) => {
        return pathname.includes(navItem);
    };
    return (
        <Navbar position="static" maxWidth="lg">
            <NavbarBrand>
                <Link className="font-bold text-inherit" href="/admin">
                    ระบบ Admin
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem
                    isActive={checkIsActive(pathname, "course-management")}
                >
                    <Link href={`/admin/${degree}/course-management`}>
                        จัดการ Course
                    </Link>
                </NavbarItem>
                <NavbarItem
                    isActive={checkIsActive(pathname, "program-management")}
                >
                    <Link href={`/admin/${degree}/program-management`}>
                        จัดการแผนการเรียน
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button color="danger" onClick={() => signOut()}>
                        Sign Out
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default AdminNavbar;
