import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";
import { Toaster } from "sonner";

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
    <html lang="en">
      <Provider>
        <body dir="rtl" className={`${Vazirmatn.className} overflow-x-hidden`}>
          {children}
        </body>
        <Toaster />
      </Provider>
    </html>
  );
}
