import { ContentType } from "@/types/program";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    ButtonGroup,
} from "@nextui-org/react";
import React from "react";

type Props = {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    data: ContentType[];
    setData: React.Dispatch<React.SetStateAction<ContentType[]>>;
};

const CreateModal = ({
    isOpen,
    onOpen,
    onOpenChange,
    data,
    setData,
}: Props) => {
    const handleAddData = () => {
        setData((prev) => [
            ...prev,
            {
                en: {
                    name: "",
                    html: "",
                },
                th: {
                    name: "",
                    html: "",
                },
            },
        ]);
    };

    const handleOnChange = (
        lang: "th" | "en",
        index: number,
        value: string,
        key: "name" | "html"
    ) => {
        setData((prev) => {
            prev[index][lang][key] = value;
            return [...prev];
        });
    };

    const handleDelete = (index: number) => {
        setData((prev) => {
            prev.splice(index, 1);
            return [...prev];
        });
    };

    console.log(data);

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>เพิ่มหัวข้อ</ModalHeader>
                        <ModalBody>
                            {data.map((value: ContentType, index: number) => {
                                return (
                                    <div key={index}>
                                        <p className="text-lg font-semibold">
                                            หัวข้อที่ {index + 1}
                                        </p>
                                        <div className="inline-flex gap-2 mb-2">
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                color="danger"
                                                aria-label="Delete"
                                                onPress={() =>
                                                    handleDelete(index)
                                                }
                                            >
                                                <XMarkIcon />
                                            </Button>
                                            <Input
                                                onValueChange={(changedValue) =>
                                                    handleOnChange(
                                                        "th",
                                                        index,
                                                        changedValue,
                                                        "name"
                                                    )
                                                }
                                                value={value.th.name}
                                                placeholder="หัวข้อภาษาไทย"
                                            />

                                            <Input
                                                onValueChange={(changedValue) =>
                                                    handleOnChange(
                                                        "en",
                                                        index,
                                                        changedValue,
                                                        "name"
                                                    )
                                                }
                                                value={value.en.name}
                                                placeholder="หัวข้อภาษาอังกฤษ"
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            <ButtonGroup color="primary">
                                <Button onPress={() => handleAddData()}>
                                    เพิ่มหัวข้อ
                                </Button>
                            </ButtonGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onPress={onClose}>
                                บันทึก
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default CreateModal;
