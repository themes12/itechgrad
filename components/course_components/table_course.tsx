"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import "./Table-courses.css"

export const Table_courses = () => {
    return <div>
            <Table removeWrapper>
            <TableHeader>
                <TableColumn className="table-header">Course code</TableColumn>
                <TableColumn className="table-header">Course name</TableColumn>
                <TableColumn className="table-header"> </TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1" className="table-row">
                <TableCell className="table-cell-1" >204700</TableCell>
                <TableCell className="table-cell-2">
                    Data Structure and Programming Languages <br /> โครงสร้างข้อมูลและภาษาโปรแกรม
                </TableCell>
                <TableCell className="table-cell-3">course description</TableCell>
                </TableRow>
                <TableRow key="2" className="table-row">
                <TableCell className="table-cell-1">204711</TableCell>
                <TableCell className="table-cell-2">
                    Data Structure and Programming Languages <br /> โครงสร้างข้อมูลและภาษาโปรแกรม
                </TableCell>
                <TableCell className="table-cell-3">course description</TableCell>
                </TableRow>
                <TableRow key="3" className="table-row">
                <TableCell className="table-cell-1">204745</TableCell>
                <TableCell className="table-cell-2">
                    Data Structure and Programming Languages <br /> โครงสร้างข้อมูลและภาษาโปรแกรม
                </TableCell>
                <TableCell className="table-cell-3">course description</TableCell>
                </TableRow>
            </TableBody>
            </Table>
    </div>
}