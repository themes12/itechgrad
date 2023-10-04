"use client";
import {
    Button,
    Card,
    CardBody,
    Input,
    Tab,
    Tabs,
    useDisclosure,
} from "@nextui-org/react";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import CreateModal from "./create_modal";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { ContentType, ProgramType } from "@/types/program";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

const Form = ({
    data,
    params,
    text,
}: {
    data?: ProgramType;
    params: { id: string; degree: string; plan_id?: string };
    text: string;
}) => {
    const { id, degree, plan_id } = params;
    const toast = useRef<Toast>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [header, setHeader] = useState<ContentType[]>(data?.content ?? []);
    const formik = useFormik<ProgramType>({
        initialValues: {
            name_en: data?.name_en ?? "",
            name_th: data?.name_th ?? "",
        },
        validationSchema: Yup.object({
            name_en: Yup.string().required("Required"),
            name_th: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            const payload = { ...values, content: [...header] };
            if (data) {
                try {
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/plan/${degree}/${id}/${plan_id}`,
                        payload
                    );
                    toast.current?.show({
                        severity: "success",
                        summary: "แก้ไขข้อมูลแผนการเรียนสำเร็จ",
                        life: 3000,
                    });
                } catch (error) {
                    toast.current?.show({
                        severity: "error",
                        summary: "แก้ไขข้อมูลแผนการเรียนไม่สำเร็จ",
                        life: 3000,
                    });
                }
            } else {
                try {
                    const res = await axios.put(
                        `${process.env.NEXT_PUBLIC_API_URL}/plan/${degree}/${id}`,
                        payload
                    );
                    formik.resetForm();
                    setHeader([]);
                    toast.current?.show({
                        severity: "success",
                        summary: "เพิ่มข้อมูลแผนการเรียนสำเร็จ",
                        life: 3000,
                    });
                } catch (error) {
                    toast.current?.show({
                        severity: "error",
                        summary: "เพิ่มข้อมูลแผนการเรียนไม่สำเร็จ",
                        life: 3000,
                    });
                }
            }
        },
    });

    const isFormFieldInvalid = (name: string) =>
        !!(
            formik.touched[name as keyof ProgramType] &&
            formik.errors[name as keyof ProgramType]
        );

    const handleOnChange = (
        lang: "th" | "en",
        index: number,
        value: string,
        key: "name" | "html"
    ) => {
        setHeader((prev) => {
            prev[index][lang][key] = value;
            return [...prev];
        });
    };

    return (
        <form>
            <div className="flex justify-center gap-3">
                <h1 className="font-bold text-3xl text-center">{text}</h1>
                <Button onPress={onOpen} color="primary" size="sm" isIconOnly>
                    <PlusSmallIcon />
                </Button>
            </div>
            <Toast ref={toast} />
            <CreateModal
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                data={header}
                setData={setHeader}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
                <div className="h-unit-10 min-h-unit-10">
                    <Input
                        type="text"
                        label="ชื่อแผนการเรียนภาษาไทย"
                        isInvalid={isFormFieldInvalid("name_th")}
                        errorMessage={
                            isFormFieldInvalid("name_th") &&
                            formik.errors.name_th
                        }
                        className="max-w-full"
                        value={formik.values.name_th}
                        onChange={(e) => {
                            formik.setFieldValue("name_th", e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        label="ชื่อแผนการเรียนภาษาอังกฤษ"
                        isInvalid={isFormFieldInvalid("name_en")}
                        errorMessage={
                            isFormFieldInvalid("name_en") &&
                            formik.errors.name_en
                        }
                        className="max-w-full"
                        value={formik.values.name_en}
                        onChange={(e) => {
                            formik.setFieldValue("name_en", e.target.value);
                        }}
                    />
                </div>
            </div>
            <Tabs>
                {header.map((item, index) => (
                    <Tab key={index} title={item.th.name}>
                        <Card>
                            <CardBody>
                                <SunEditor
                                    defaultValue={item.th.html}
                                    setOptions={{
                                        buttonList: [
                                            [
                                                "undo",
                                                "redo",
                                                "font",
                                                "fontSize",
                                                "formatBlock",
                                                "paragraphStyle",
                                                "blockquote",
                                                "bold",
                                                "underline",
                                                "italic",
                                                "strike",
                                                "subscript",
                                                "superscript",
                                                "fontColor",
                                                "hiliteColor",
                                                "textStyle",
                                                "removeFormat",
                                                "outdent",
                                                "indent",
                                                "align",
                                                "horizontalRule",
                                                "list",
                                                "lineHeight",
                                                "table",
                                                "link",
                                                "image",
                                                "video",
                                                "audio",
                                                // "math",
                                                "imageGallery",
                                                "fullScreen",
                                                "showBlocks",
                                                "codeView",
                                                "preview",
                                                "print",
                                                "save",
                                                "template",
                                            ],
                                        ],
                                    }}
                                    onChange={(content) =>
                                        handleOnChange(
                                            "th",
                                            index,
                                            content,
                                            "html"
                                        )
                                    }
                                />
                            </CardBody>
                        </Card>
                    </Tab>
                ))}
            </Tabs>
            <Tabs>
                {header.map((item, index) => (
                    <Tab key={index} title={item.en.name}>
                        <Card>
                            <CardBody>
                                <SunEditor
                                    setOptions={{
                                        buttonList: [
                                            [
                                                "undo",
                                                "redo",
                                                "font",
                                                "fontSize",
                                                "formatBlock",
                                                "paragraphStyle",
                                                "blockquote",
                                                "bold",
                                                "underline",
                                                "italic",
                                                "strike",
                                                "subscript",
                                                "superscript",
                                                "fontColor",
                                                "hiliteColor",
                                                "textStyle",
                                                "removeFormat",
                                                "outdent",
                                                "indent",
                                                "align",
                                                "horizontalRule",
                                                "list",
                                                "lineHeight",
                                                "table",
                                                "link",
                                                "image",
                                                "video",
                                                "audio",
                                                // "math",
                                                "imageGallery",
                                                "fullScreen",
                                                "showBlocks",
                                                "codeView",
                                                "preview",
                                                "print",
                                                "save",
                                                "template",
                                            ],
                                        ],
                                    }}
                                    defaultValue={item.en.html}
                                    onChange={(content) =>
                                        handleOnChange(
                                            "en",
                                            index,
                                            content,
                                            "html"
                                        )
                                    }
                                />
                            </CardBody>
                        </Card>
                    </Tab>
                ))}
            </Tabs>
            <div className="mt-5 flex justify-center">
                <Button onPress={() => formik.submitForm()} color="success">
                    บันทึก
                </Button>
            </div>
        </form>
    );
};

export default Form;
