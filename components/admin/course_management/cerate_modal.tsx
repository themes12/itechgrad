import { customSort, formatArray } from "@/utils/course";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
    prerequisite: (string | string[])[]
    setPrerequisite: React.Dispatch<React.SetStateAction<(string | string[])[]>>;
};

const CreateModal = ({
    isOpen,
    onOpen,
    onOpenChange,
    prerequisite,
    setPrerequisite,
}: Props) => {
    const handleAddPrerequisite = (type: "normal" | "group", index?: number) => {
        if (typeof index !== "undefined") {
            setPrerequisite((prev) => {
                (prev[index] as string[]).push("");
                return [...prev];
            });
        } else {
            if (type === "normal") {
                setPrerequisite((prev) => [...prev, ""]);
            } else {
                setPrerequisite((prev) => [...prev, [""]]);
            }
        }
    };

    const handleOnChange = (index: number, value: string, sub_index?: number) => {
        setPrerequisite((prev) => {
            if (typeof sub_index !== "undefined") {
                (prev[index] as string[])[sub_index] = value;
                return [...prev];
            }
            prev[index] = value;
            return [...prev];
        });
    };

    const handleDelete = (index: number, sub_index?: number) => {
        setPrerequisite((prev) => {
            if (typeof sub_index !== "undefined") {
                (prev[index] as string[]).splice(sub_index, 1);
                if (prev[index].length === 0) {
                    prev.splice(index, 1);
                }
                return [...prev];
            }
            prev.splice(index, 1);
            return [...prev];
        })
    }

    console.log(prerequisite);
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            เพิ่มเงื่อนไข
                        </ModalHeader>
                        <ModalBody>
                            <p>{formatArray(customSort(prerequisite))}</p>
                            {prerequisite.map((value: any, index: number) => {
                                if (typeof value === "string") {
                                    return (
                                        <div className="inline-flex gap-2" key={index}>
                                            <Button isIconOnly size="sm" color="danger" aria-label="Delete" onPress={() => handleDelete(index)}>
                                                <XMarkIcon />
                                            </Button>
                                            <Input
                                                onValueChange={(changedValue) =>
                                                    handleOnChange(index, changedValue)
                                                }
                                                value={value}
                                                placeholder="เงื่อนไข"
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index}>
                                            <div className="inline-flex gap-2 mb-3">
                                                <p className="text-lg font-semibold">เงื่อนไขกลุ่ม</p>
                                                <Button
                                                    size="sm"
                                                    isIconOnly
                                                    color="success"
                                                    aria-label="เพิ่มเงื่อนไขในกลุ่มเดิม"
                                                    onPress={() => handleAddPrerequisite("normal", index)}
                                                >
                                                    <PlusIcon className="w-5 h-5" />
                                                </Button>
                                            </div>
                                            <div className="ml-10 space-y-2">
                                                {value.map((item: string, sub_index: number) => {
                                                    return (
                                                        <div className="w-full inline-flex gap-2" key={sub_index}>
                                                            <Button isIconOnly size="sm" color="danger" aria-label="Delete" onPress={() => handleDelete(index, sub_index)}>
                                                                <XMarkIcon />
                                                            </Button>
                                                            <Input
                                                                onValueChange={(changedValue) =>
                                                                    handleOnChange(index, changedValue, sub_index)
                                                                }
                                                                value={item}
                                                                placeholder="เงื่อนไข"
                                                            />
                                                        </div>

                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                }
                            })}

                            <ButtonGroup color="primary">
                                <Button onPress={() => handleAddPrerequisite("normal")}>
                                    เพิ่มเงื่อนไขเดี่ยว
                                </Button>
                                <Button onPress={() => handleAddPrerequisite("group")}>
                                    เพิ่มเงื่อนไขกลุ่ม
                                </Button>
                            </ButtonGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onPress={onClose}>
                                Save
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default CreateModal;
