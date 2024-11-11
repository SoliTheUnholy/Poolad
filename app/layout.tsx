import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Link className="fixed end-0 top-40 z-50" href={"/home/contact"}>
              <Button className="h-fit w-min self-center rounded-l-none bg-primary px-2 text-base [writing-mode:vertical-lr]">
                <span>ارتباط با ما</span>
              </Button>
            </Link>
            {children}
          </ThemeProvider>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
