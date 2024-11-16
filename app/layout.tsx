import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FixTheme from "@/components/FixTheme";

const Vazirmatn = localFont({ src: "../fonts/Vazirmatn[wght].woff2" });

export const metadata: Metadata = {
  title: "Poolad Saghf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body dir="rtl" className={`${Vazirmatn.className} overflow-x-hidden`}>
        <Provider>
          <FixTheme> {children}</FixTheme>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
