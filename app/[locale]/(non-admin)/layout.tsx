import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { useLocale, NextIntlClientProvider, useMessages, } from "next-intl";

type Props = {};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const messages = useMessages();
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale}
            messages={
                messages
            }>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </NextIntlClientProvider>
    );
};

export default Layout;
