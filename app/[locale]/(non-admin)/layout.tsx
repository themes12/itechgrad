import pick from 'lodash/pick';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { useLocale, NextIntlClientProvider, useMessages } from "next-intl";

type Props = {};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const messages = useMessages();
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale}
            messages={
                // Only provide the minimum of messages
                pick(messages, 'Index')
            }>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </NextIntlClientProvider>
    );
};

export default Layout;
