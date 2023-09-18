import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = {
    title: "iTechGrad",
    description: "iTechGrad",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    <div>{children}</div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
