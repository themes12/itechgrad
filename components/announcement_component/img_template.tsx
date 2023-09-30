import React from "react";

import {Image} from "@nextui-org/react";

type Props = {};

const ImgTemplate = (props: Props) => {
    return (
        <div className="flex flex-wrap lg:gap-10 md:gap-6 gap-2 justify-center py-4">
            <div className="lg:w-2/5 md:w-2/5">
                <Image
                    className="rounded h-auto w-auto"
                    alt="NextUI hero Image"
                    src="/_DSC3640.jpg"
                />
            </div>
            <div className="lg:w-2/5 md:w-2/5">
                <Image
                    className="rounded h-auto w-auto"
                    alt="NextUI hero Image"
                    src="/_DSC3640.jpg"
                />
            </div>
        </div>

    );
};

export default ImgTemplate;