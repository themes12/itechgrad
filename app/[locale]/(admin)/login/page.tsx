"use client";
import Section from "@/components/section";
import { useState } from "react";
import { Input, Button, user } from "@nextui-org/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const Admin = (props: Props) => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            const { username, password } = data;
            const res = await signIn("credentials", {
                username,
                password,
                redirect: false,
            });
            router.replace("/admin");
        } catch (e) {}
    };

    return (
        <Section className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9 py-12">
            <form
                className="flex justify-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col w-full max-w-xs gap-4">
                    <h1 className="text-center text-4xl font-bold">Login</h1>
                    <Controller
                        name="username"
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                isRequired
                                value={value}
                                type="text"
                                label="Username"
                                onChange={onChange}
                                placeholder="Type your username"
                                className="max-w-xs"
                                errorMessage={
                                    errors.username && "Username is required"
                                }
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                isRequired
                                value={value}
                                type="password"
                                label="Password"
                                onChange={onChange}
                                placeholder="Type your password"
                                className="max-w-xs"
                                errorMessage={
                                    errors.password && "Password is required"
                                }
                            />
                        )}
                    />
                    <Button type="submit" className="max-w-xs" color="primary">
                        Login
                    </Button>
                </div>
            </form>
        </Section>
    );
};

export default Admin;
