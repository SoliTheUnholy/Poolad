"use client";
import Link from "next/link";
import { Home, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const handleLogin = () => {
    if (status === "authenticated") {
      router.push("/dashboard");
    } else if (status === "loading") {
      return <Loading />;
    } else {
      router.push("/home/login");
    }
  };
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-3 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-5">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span>تعاونی پولاد سقف خلیج فارس</span>
            </Link>
            <Separator orientation="vertical" className="h-10" />
            <Link
              href="/home/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home" ? "text-lg font-bold text-black" : ""}`}
            >
              خانه
            </Link>
            <Link
              href="/home/products"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname.includes("/home/products") ? "text-lg font-bold text-black" : ""}`}
            >
              محصولات
            </Link>
            <Link
              href="/home/weblog"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname.includes("/home/weblog") ? "text-lg font-bold text-black" : ""}`}
            >
              وبلاگ
            </Link>
            <Link
              href="/home/about"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/about" ? "text-lg font-bold text-black" : ""}`}
            >
              درباره ما
            </Link>
            <Link
              href="/home/contact"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/contact" ? "text-lg font-bold text-black" : ""}`}
            >
              ارتباط با ما
            </Link>
          </nav>
          <Sheet>
            <SheetTitle className="sr-only"></SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col overflow-y-scroll"
            >
              <div className="mt-10 flex justify-between">
                <Link
                  href="/home"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span>تعاونی پولاد سقف خلیج فارس</span>
                </Link>
              </div>
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="/home/">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    خانه
                  </SheetClose>
                </Link>
                <Link href="/home/products">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/products" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    محصولات
                  </SheetClose>
                </Link>
                <Link href="/home/weblog">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/weblog" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    وبلاگ
                  </SheetClose>
                </Link>
                <Link href="/home/about">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/about" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    درباره ما
                  </SheetClose>
                </Link>
                <Link href="/home/contact">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/contact" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    ارتباط با ما
                  </SheetClose>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          {status !== "authenticated" ? (
            <div className="grid grid-cols-2 items-center gap-1">
              <Link href={"/home/register"}>
                <Button className="w-full" variant={"outline"}>
                  ثبت نام
                </Button>
              </Link>
              <Link href={"/home/login"}>
                <Button className="w-full" variant={"default"}>
                  ورود
                </Button>
              </Link>
            </div>
          ) : (
            <Link href={"/dashboard"}>
              <Button className="w-full" variant={"default"}>
                ورود به داشبورد
              </Button>
            </Link>
          )}
        </header>
        <div className="fixed -z-50 h-screen w-screen bg-[url('/pattern.png')] bg-repeat"></div>
        {children}
      </div>
    </>
  );
}
