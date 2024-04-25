"use client"
import React from "react";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import ShowAnnouncement from "./show_announcement";
import CategorySelect from "./category_select";

type Props = {};

const AnnoucementMain = (props: Props) => {
    const t = useTranslations("Annoucement");

    return (
        <div>
            <h1 className="xxxs:text-[2rem] xxs:text-[2.5rem] md:text-[4rem] font-bold">
                {t("header1")}
            </h1>
            <h6 className="text-lg font-[300] text-[#7D7D7D]">{t("header2")}</h6>
            <Divider className="my-8" />
            <div>
                <div className="flex flex-row gap-4 my-8">
                    <CategorySelect />
                </div>
                <ShowAnnouncement />
            </div>
        </div>
    );
};

export default AnnoucementMain;
