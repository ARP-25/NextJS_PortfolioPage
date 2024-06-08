import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from "./provider";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Angelo's Website",
    description: "Modern & Minimalist Portfolio",
    icons: {
        icon: ["https://cdn.iconscout.com/icon/free/png-256/free-rocket-launch-startup-business-mission-space-marketing-4-5432.png"]
    }
};

export default async function RootLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang="en">
            <body className={inter.className}>
                {" "}
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
