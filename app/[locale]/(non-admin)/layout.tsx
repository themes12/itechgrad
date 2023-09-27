import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "next-intl";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default layout;
