import React from "react";

type Props = {};

const Page = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return <div>{id}</div>;
};

export default Page;
