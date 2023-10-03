import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { Providers } from "./providers";
import AuthProvider from "./AuthProvider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "th"];
const inter = Noto_Sans_Thai({ subsets: ["thai"] });
// const inter = Kanit({ subsets: ["thai"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "th" }];
}

export const metadata: Metadata = {
    title: "iTechGrad",
    description: "iTechGrad",
};

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: any;
}) {
    let messages;
    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    const isValidLocale = locales.some((cur) => cur === locale);
    if (!isValidLocale) notFound();

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <AuthProvider>
                    <Providers>
                        <NextIntlClientProvider
                            locale={locale}
                            messages={messages}
                        >
                            <div>{children}</div>
                        </NextIntlClientProvider>
                    </Providers>
                </AuthProvider>
            </body>
        </html>
    );
}
