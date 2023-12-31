// MyModal.js (or MyModal.tsx)
"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import "@/components/course_components/course_pageInner.css";
import { Course } from "@/types/course";
import { customSort, formatArray } from "@/utils/course";

export const MyModal = ({ course }: { course: Course }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const size = '4xl'
  return (
    <>
      <a className="px-3 py-2 font-normal text-gray lg:text-base md:text-base sm:text-base xs:text-sm xxs:text-xs xxxs:text-xs" onClick={onOpen}>รายละเอียด</a>
      <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <div className="pt-20">
                <ModalBody className="modal_body">

                  <Table hideHeader removeWrapper aria-label="Example collection table">
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>DATA</TableColumn>
                    </TableHeader>
                    <TableBody className="Table-body">

                      <TableRow key="1 " className="course_id" >
                        <TableCell className="table_name">รหัสกระบวนการวิชา</TableCell>
                        <TableCell className="table_data">{course._id}</TableCell>
                      </TableRow>


                      <TableRow key="2">
                        <TableCell className="table_name" >ชื่อกระบวนการวิชา</TableCell>
                        <TableCell className="table_data">{course.name_en}</TableCell>
                      </TableRow>
                      <TableRow key="3" className="course_id" >
                        <TableCell> </TableCell>
                        <TableCell className="table_data">{course.name_th}</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell className="table_name" >คำอธิบายลักษณะกระบวนวิชา</TableCell>
                        <TableCell className="table_data">{course.description_en}</TableCell>
                      </TableRow>
                      <TableRow key="5" className="course_id" >
                        <TableCell> </TableCell>
                        <TableCell className="table_data">{course.description_th}</TableCell>
                      </TableRow>
                      <TableRow key="6" className="course_id">
                        <TableCell className="table_name">หน่วยกิต</TableCell>
                        <TableCell className="table_data">{`${course.credit.total}`}{`${course.credit.lecture === null && course.credit.lab === null && course.credit.independent_study === null ? "" : `(${course.credit?.lecture}-${course.credit?.lab}-${course.credit?.independent_study})`}`}</TableCell>
                      </TableRow>
                      <TableRow key="7" className="course_id">
                        <TableCell className="table_name">เงื่อนไขที่ต้องผ่านก่อนเรียน (Prerequisite)</TableCell>
                        {/* <TableCell className="table_data">{course.prerequisite.map((value, index) => <>{formatArray(course.prerequisite)}</>)}</TableCell> */}
                        <TableCell className="table_data">{formatArray(customSort(course.prerequisite))}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                </ModalBody>
                <ModalFooter>
                  <div className="pt-20"></div>
                </ModalFooter>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}






