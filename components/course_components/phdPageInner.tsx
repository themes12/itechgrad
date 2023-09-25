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
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import "@/components/course_components/course_pageInner.css";

export const MyModal = () => { 
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const size = '4xl'
  return (
    <>
      <a color="gray" onClick={onOpen}>courses description</a>
      <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
            <div className="pt-20">   
              <ModalBody>
               
              <Table hideHeader removeWrapper aria-label="Example collection table">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>DATA</TableColumn>
                </TableHeader>
                  <TableBody>
                
                        <TableRow key="1 " className="course_id" >
                          <TableCell  className="table_name">รหัสกระบวนการวิชา</TableCell>
                          <TableCell  className="table_data">204700</TableCell>
                        </TableRow>
                    
                     
                      <TableRow key="2">
                        <TableCell  className="table_name" >ชื่อกระบวนการวิชา</TableCell>
                        <TableCell  className="table_data">Data Structure and Programming Languages</TableCell>
                      </TableRow>
                      <TableRow key="3" className="course_id" >
                        <TableCell> </TableCell>
                        <TableCell  className="table_data">โครงสร้างข้อมูลและภาษาโปรแกรม</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell  className="table_name" text-align="top">คำอธิบายลักษณะกระบวนวิชา</TableCell>
                        <TableCell  className="table_data">Abstract data types, linear data structure, non-linear data structure, 
                                  searching and sorting techniques, programming language paradigms.
                        </TableCell>
                      </TableRow>
                      <TableRow key="5" className="course_id" >
                        <TableCell> </TableCell>
                        <TableCell className="table_data">แบบชนิดข้อมูลนามธรรม โครงสร้างข้อมูลแบบเชิงเส้น โครงสร้างข้อมูลแบบไม่เชิงเส้น เทคนิคการค้นหา
                                    และการเรียงลำดับ รูปแบบของภาษาโปรแกรม
                      </TableCell>
                      </TableRow>
                      <TableRow key="6"  className="course_id">
                        <TableCell  className="table_name">หน่วยกิต</TableCell>
                        <TableCell  className="table_data">2(2-0-4)</TableCell>
                      </TableRow>
                      <TableRow key="7"  className="course_id">
                        <TableCell  className="table_name">เงื่อนไขที่ต้องผ่านก่อนเรียน (Prerequisite)</TableCell>
                        <TableCell  className="table_data">none</TableCell>
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






