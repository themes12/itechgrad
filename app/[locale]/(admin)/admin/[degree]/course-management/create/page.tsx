"use client"
import CreateModal from '@/components/admin/course_management/cerate_modal'
import Section from '@/components/section'
import { customSort, formatArray } from '@/utils/course'
import { Button, useDisclosure, Input, Textarea } from '@nextui-org/react'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Toast } from 'primereact/toast';
import Form from '@/components/admin/course_management/form'

type Props = {}

const CreateCourse = ({ params }: { params: { course_id: string, degree: string } }) => {

    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl mx-auto px-9 lg:px-9">
            <h1 className="font-bold text-3xl text-center">เพิ่มรายวิชา</h1>
            <div className="mt-5">
                <Form params={params} />
            </div>
        </Section>
    )
}

export default CreateCourse