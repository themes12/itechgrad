"use client"
import CreateModal from '@/components/admin/course_management/cerate_modal'
import { customSort, formatArray } from '@/utils/course'
import { Button, useDisclosure, Input, Textarea } from '@nextui-org/react'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Toast } from 'primereact/toast';
import { Course } from '@/types/course'

type Props = { course?: Course, params: { course_id: string, degree: string } }

const Form = ({ course, params }: Props) => {
    const { degree, course_id } = params;
    const toast = useRef<Toast>(null);
    const [prerequisite, setPrerequisite] = useState<Array<string | Array<string>>>(course?.prerequisite ?? [])
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const formik = useFormik({
        initialValues: {
            _id: course?._id ?? '',
            name_en: course?.name_en ?? '',
            name_th: course?.name_th ?? '',
            credit: {
                total: course?.credit.total ?? 0,
                lecture: course?.credit.lecture ?? 0,
                lab: course?.credit.lab ?? 0,
                independent_study: course?.credit.independent_study ?? 0,
            },
            description_en: course?.description_en ?? '',
            description_th: course?.description_th ?? ''
        },
        validationSchema: Yup.object({
            _id: Yup.string()
                .required('Required'),
            name_en: Yup.string()
                .required('Required'),
            name_th: Yup.string()
                .required('Required'),
            credit: Yup.object({
                total: Yup.number()
                    .required('Required'),
                lecture: Yup.number()
                    .required('Required'),
                lab: Yup.number()
                    .required('Required'),
                independent_study: Yup.number()
                    .required('Required'),
            }),
            description_en: Yup.string()
                .required('Required'),
            description_th: Yup.string()
                .required('Required'),
        }),
        onSubmit: async (values) => {
            const data = { ...values, prerequisite: [...prerequisite] }
            if (course) {
                try {
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/course/${degree}/${course_id}`,
                        data
                    )
                    console.log(res.data)
                    toast.current?.show({ severity: 'success', summary: 'เพิ่มข้อมูลรายวิชาสำเร็จ', life: 3000 })
                } catch (error) {
                    toast.current?.show({ severity: 'error', summary: 'เพิ่มข้อมูลรายวิชาไม่สำเร็จ', life: 3000 })
                }
            } else {
                try {
                    const res = await axios.put(
                        `${process.env.NEXT_PUBLIC_API_URL}/course/${degree}`,
                        data
                    )
                    console.log(res.data)
                    formik.resetForm();
                    toast.current?.show({ severity: 'success', summary: 'เพิ่มข้อมูลรายวิชาสำเร็จ', life: 3000 })
                } catch (error) {
                    toast.current?.show({ severity: 'error', summary: 'เพิ่มข้อมูลรายวิชาไม่สำเร็จ', life: 3000 })
                }
            }
        },
    });


    const isFormFieldInvalid = (name: string) => !!(formik.touched[name] && formik.errors[name]);

    return (
        <form>
            <Toast ref={toast} />
            <div className="grid grid-cols-4 gap-3">
                <div className="h-unit-10 min-h-unit-10">
                    <Input
                        type="text"
                        label="รหัสวิชา"
                        isInvalid={isFormFieldInvalid('_id')}
                        errorMessage={isFormFieldInvalid('_id') && formik.errors._id}
                        className="max-w-xs"
                        value={formik.values._id}
                        onChange={(e) => {
                            formik.setFieldValue('_id', e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        label="ชื่อวิชาภาษาอังกฤษ"
                        isInvalid={isFormFieldInvalid('name_en')}
                        errorMessage={isFormFieldInvalid('name_en') && formik.errors.name_en}
                        className="max-w-xs"
                        value={formik.values.name_en}
                        onChange={(e) => {
                            formik.setFieldValue('name_en', e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        label="ชื่อวิชาภาษาไทย"
                        isInvalid={isFormFieldInvalid('name_th')}
                        errorMessage={isFormFieldInvalid('name_th') && formik.errors.name_th}
                        className="max-w-xs"
                        value={formik.values.name_th}
                        onChange={(e) => {
                            formik.setFieldValue('name_th', e.target.value);
                        }}
                    />
                </div>
            </div>
            <p className="text-lg font-semibold mt-5">หน่วยกิต</p>
            <div className="grid grid-cols-4 gap-3">
                <div>
                    <Input
                        type="number"
                        label="วิชา"
                        isInvalid={isFormFieldInvalid('credit.total')}
                        errorMessage={isFormFieldInvalid('credit.total') && formik.errors.credit?.total}
                        className="max-w-xs"
                        value={formik.values.credit?.total.toString()}
                        onChange={(e) => {
                            formik.setFieldValue('credit.total', e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Input
                        type="number"
                        label="บรรยาย"
                        isInvalid={isFormFieldInvalid('credit.lecture')}
                        errorMessage={isFormFieldInvalid('credit.lecture') && formik.errors.credit?.lecture}
                        className="max-w-xs"
                        value={formik.values.credit?.lecture.toString()}
                        onChange={(e) => {
                            formik.setFieldValue('credit.lecture', e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Input
                        type="number"
                        label="ปฏิบัติการ"
                        isInvalid={isFormFieldInvalid('credit.lab')}
                        errorMessage={isFormFieldInvalid('credit.lab') && formik.errors.credit?.lab}
                        className="max-w-xs"
                        value={formik.values.credit?.lab.toString()}
                        onChange={(e) => {
                            formik.setFieldValue('credit.lab', e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Input
                        type="number"
                        label="ศึกษาทบทวนนอกห้องเรียน"
                        isInvalid={isFormFieldInvalid('credit.independent_study')}
                        errorMessage={isFormFieldInvalid('credit.independent_study') && formik.errors.credit?.independent_study}
                        className="max-w-xs"
                        value={formik.values.credit?.independent_study.toString()}
                        onChange={(e) => {
                            formik.setFieldValue('credit.independent_study', e.target.value);
                        }}
                    />
                </div>
            </div>
            <p className="text-lg font-semibold mt-5">เงื่อนไข</p>
            <p className="text-base font-base mt-5">{formatArray(customSort(prerequisite))}</p>
            <Button onPress={onOpen}>เพิ่มเงื่อนไข</Button>
            <CreateModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} prerequisite={prerequisite} setPrerequisite={setPrerequisite} />
            <p className="text-lg font-semibold mt-5">คำบรรยายวิชา</p>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <Textarea
                        size="lg"
                        label="ภาษาอังกฤษ"
                        isInvalid={isFormFieldInvalid('description_en')}
                        errorMessage={isFormFieldInvalid('description_en') && formik.errors.description_en}
                        className="w-full"
                        value={formik.values.description_en}
                        onChange={(e) => {
                            formik.setFieldValue('description_en', e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Textarea
                        size="lg"
                        label="ภาษาไทย"
                        isInvalid={isFormFieldInvalid('description_th')}
                        errorMessage={isFormFieldInvalid('description_th') && formik.errors.description_th}
                        className="w-full"
                        value={formik.values.description_th}
                        onChange={(e) => {
                            formik.setFieldValue('description_th', e.target.value);
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
    )
}

export default Form