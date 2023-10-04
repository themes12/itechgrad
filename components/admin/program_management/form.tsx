"use client";
import CreateModal from "@/components/admin/course_management/cerate_modal";
import { customSort, formatArray } from "@/utils/course";
import { Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import {
    withFormik,
    FormikProps,
    FormikErrors,
    useFormik,
    FormikTouched,
} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Toast } from "primereact/toast";
import { Program } from "@/types/program";

type Props = { program?: Program; params: { id: string; degree: string } };

const Form = ({ program, params }: Props) => {
    const { degree, id } = params;
    const toast = useRef<Toast>(null);
    const formik = useFormik<Program>({
        initialValues: {
            name_en: program?.name_en ?? "",
            name_th: program?.name_th ?? "",
        },
        validationSchema: Yup.object({
            name_en: Yup.string().required("Required"),
            name_th: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            const data = { ...values };
            if (program) {
                console.log(`${process.env.NEXT_PUBLIC_API_URL}/program/${id}`);
                // try {
                //     const res = await axios.post(
                //         `${process.env.NEXT_PUBLIC_API_URL}/program/${id}`,
                //         data
                //     );
                //     toast.current?.show({
                //         severity: "success",
                //         summary: "เพิ่มข้อมูลรายวิชาสำเร็จ",
                //         life: 3000,
                //     });
                // } catch (error) {
                //     toast.current?.show({
                //         severity: "error",
                //         summary: "เพิ่มข้อมูลรายวิชาไม่สำเร็จ",
                //         life: 3000,
                //     });
                // }
            } else {
                console.log(`${process.env.NEXT_PUBLIC_API_URL}/program/${id}`);
                // try {
                //     const res = await axios.put(
                //         `${process.env.NEXT_PUBLIC_API_URL}/course/${degree}`,
                //         data
                //     );
                //     formik.resetForm();
                //     toast.current?.show({
                //         severity: "success",
                //         summary: "เพิ่มข้อมูลรายวิชาสำเร็จ",
                //         life: 3000,
                //     });
                // } catch (error) {
                //     toast.current?.show({
                //         severity: "error",
                //         summary: "เพิ่มข้อมูลรายวิชาไม่สำเร็จ",
                //         life: 3000,
                //     });
                // }
            }
        },
    });

    const isFormFieldInvalid = (name: string) =>
        !!(
            formik.touched[name as keyof Program] &&
            formik.errors[name as keyof Program]
        );

    return (
        <form>
            <Toast ref={toast} />
            <div className="grid grid-cols-2 gap-3">
                <div className="h-unit-10 min-h-unit-10">
                    <Input
                        type="text"
                        label="ชื่อหลักสูตรภาษาไทย"
                        isInvalid={isFormFieldInvalid("name_th")}
                        errorMessage={
                            isFormFieldInvalid("name_th") &&
                            formik.errors.name_th
                        }
                        className="max-w-xs"
                        value={formik.values.name_th}
                        onChange={(e) => {
                            formik.setFieldValue("name_th", e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        label="ชื่อหลักสูตรภาษาอังกฤษ"
                        isInvalid={isFormFieldInvalid("name_en")}
                        errorMessage={
                            isFormFieldInvalid("name_en") &&
                            formik.errors.name_en
                        }
                        className="max-w-xs"
                        value={formik.values.name_en}
                        onChange={(e) => {
                            formik.setFieldValue("name_en", e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="mt-5">
                <Button onPress={() => formik.submitForm()} color="success">
                    บันทึก
                </Button>
            </div>
        </form>
    );
};

export default Form;
