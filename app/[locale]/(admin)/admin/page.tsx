"use client";
import { signOut, useSession } from "next-auth/react";
type Props = {};

const Admin = (props: Props) => {
    const { data: session } = useSession();
    console.log(session?.user);

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
                <div>
                    Name:{" "}
                    <span className="font-bold">{session?.user?.name}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Admin;
