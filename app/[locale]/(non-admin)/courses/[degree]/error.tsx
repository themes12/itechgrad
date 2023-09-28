"use client";
import React from "react";

type Props = {};

const Error = ({ error }: any) => {
    return <div>{error.message}</div>;
};

export default Error;
