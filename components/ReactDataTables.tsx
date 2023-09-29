"use client";
import DataTables, { Config } from "datatables.net-dt";
import { useEffect, useRef } from "react";

export function ReactDataTables({ ...props }: Config) {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const dt = new DataTables(tableRef.current!, {
            serverSide: true,
            ajax: {
                url: `${process.env.NEXT_PUBLIC_API_URL}/courses/master-degree`,
                type: "POST",
            },
        });
        return () => {
            dt.destroy();
        };
    }, []);

    return (
        <table ref={tableRef}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                </tr>
            </thead>
        </table>
    );
}

export default ReactDataTables;
