import React from "react";

import {Button} from "@nextui-org/react";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";


type Props = {};

const BackButton = (props: Props) => {
    return (
    <div className="flex flex-wrap gap-4 items-center bg-[#262626]">
      <Button color="default" variant="light" className="text-[#515151]">
        <ArrowLeftIcon className="h-4 w-4" />
        Back
      </Button>   
    </div>
    );
};

export default BackButton;
