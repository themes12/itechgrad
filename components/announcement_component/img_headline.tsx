import React from "react";

import {Image} from "@nextui-org/react";

type Props = {};

const ImgHeadline = (props: Props) => {
    return (
    <div className="flex flex-col gap-6">
        {/* img */}
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="w-12/12" >
                    <Image
                        className="rounded h-auto w-max"
                        alt="mock up"
                        src="/_DSC3640.jpg"
                    />
                </div>
            </div>
        </div>
        
    </div>

    );
};

export default ImgHeadline;