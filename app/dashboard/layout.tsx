"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  PackagePlus,
  PackageSearch,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SwitchTheme } from "@/components/modeToggle";
import { Separator } from "@radix-ui/react-separator";
import { useTheme } from "next-themes";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useSession();
  const pathname = usePathname();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router.push("/home");
  }
  const { theme } = useTheme();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const Today = new Date().toLocaleDateString("fa-IR", options as any);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-l bg-muted/40 md:block">
        <div className="flex flex-col">
          <div className="flex h-[7vh] items-center border-b px-4 lg:h-[7vh] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                className="h-10 w-10 dark:invert"
                height={24}
                width={24}
                src={"/logo.png"}
                alt={""}
              />{" "}
              <span className="">تعاونی پولاد سقف </span>
            </Link>
          </div>
          <div className="flex h-[93vh] flex-col justify-between overflow-y-scroll">
            <nav className="mt-2 grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard" ? "bg-muted text-primary" : ""}`}
              >
                <Home className="h-4 w-4" />
                داشبورد
              </Link>
              <Accordion
                type="single"
                collapsible
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <AccordionItem value="item-1" className="w-full">
                  <AccordionTrigger>
                    <span className="flex w-max items-center gap-3">
                      <PackagePlus className="h-4 w-4" />
                      محصولات
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link
                      href="/dashboard/lattice"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changeinfo" ? "bg-muted text-primary" : ""}`}
                    >
                      <Users className="h-4 w-4" />
                      خرپا
                    </Link>
                    <Link
                      href="/dashboard/coil"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
                    >
                      <LineChart className="h-4 w-4" />
                      کلاف
                    </Link>
                    <Link
                      href="/dashboard/drawncoil"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
                    >
                      <LineChart className="h-4 w-4" />
                      کلاف کشیده
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <AccordionItem value="item-1" className="w-full">
                  <AccordionTrigger>
                    <span className="flex w-max items-center gap-3">
                      <PackagePlus className="h-4 w-4" />
                      سفارشات
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link
                      href="/home/products"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/orderlist" ? "bg-muted text-primary" : ""}`}
                    >
                      <PackageSearch className="h-4 w-4" />
                      ثبت سفارش جدید
                    </Link>{" "}
                    <Link
                      href="/dashboard/orderslist"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/orderlist" ? "bg-muted text-primary" : ""}`}
                    >
                      <PackageSearch className="h-4 w-4" />
                      لیست سفارشات
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <AccordionItem value="item-1" className="w-full">
                  <AccordionTrigger>
                    <span className="flex w-max items-center gap-3">
                      <PackagePlus className="h-4 w-4" />
                      اطلاعات کاربر
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link
                      href="/dashboard/changeinfo"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changeinfo" ? "bg-muted text-primary" : ""}`}
                    >
                      <Users className="h-4 w-4" />
                      تغییر مشخصات اکانت
                    </Link>
                    <Link
                      href="/dashboard/changepassword"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
                    >
                      <LineChart className="h-4 w-4" />
                      تغییر رمز
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                onClick={() => signOut()}
                href="/home"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-red-500 transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                خروج
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-[7vh] shrink-0 items-center justify-between border-b bg-muted/40 px-4 lg:h-[7vh] lg:px-6">
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
              <section className="mt-10 flex justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Image
                    className="h-10 w-10 dark:invert"
                    height={24}
                    width={24}
                    src={"/logo.png"}
                    alt={""}
                  />{" "}
                  <span className=""> تعاونی پولاد سقف</span>
                </Link>
              </section>
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="/dashboard">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    داشبورد
                  </SheetClose>
                </Link>
                <Accordion
                  type="single"
                  collapsible
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                >
                  <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger>
                      <span className="flex w-max items-center gap-3">
                        <PackagePlus className="h-4 w-4" />
                        محصولات
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="/dashboard/lattice">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changeinfo" ? "bg-muted text-primary" : ""}`}
                        >
                          <Users className="h-4 w-4" />
                          خرپا
                        </SheetClose>
                      </Link>
                      <Link href="/dashboard/coil">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changepassword" ? "bg-muted text-primary" : ""}`}
                        >
                          <LineChart className="h-4 w-4" />
                          کلاف
                        </SheetClose>
                      </Link>
                      <Link href="/dashboard/drawncoil">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changepassword" ? "bg-muted text-primary" : ""}`}
                        >
                          <LineChart className="h-4 w-4" />
                          کلاف کشیده
                        </SheetClose>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                >
                  <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger>
                      <span className="flex w-max items-center gap-3">
                        <PackagePlus className="h-4 w-4" />
                        سفارشات
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="/home/products">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/orderslist" ? "bg-muted text-primary" : ""}`}
                        >
                          <PackageSearch className="h-4 w-4" />
                          ثبت سفارش جدید
                        </SheetClose>
                      </Link>
                      <Link href="/dashboard/orderslist">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/orderslist" ? "bg-muted text-primary" : ""}`}
                        >
                          <PackageSearch className="h-4 w-4" />
                          لیست سفارشات
                        </SheetClose>
                      </Link>
                      <Link href="/dashboard/files">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/files" ? "bg-muted text-primary" : ""}`}
                        >
                          <Package className="h-4 w-4" />
                          مدیریت فایلها
                        </SheetClose>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                >
                  <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger>
                      <span className="flex w-max items-center gap-3">
                        <PackagePlus className="h-4 w-4" />
                        اطلاعات کاربر
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="/dashboard/changeinfo">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changeinfo" ? "bg-muted text-primary" : ""}`}
                        >
                          <Users className="h-4 w-4" />
                          تغییر مشخصات اکانت
                        </SheetClose>
                      </Link>
                      <Link href="/dashboard/changepassword">
                        <SheetClose
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changepassword" ? "bg-muted text-primary" : ""}`}
                        >
                          <LineChart className="h-4 w-4" />
                          تغییر رمز
                        </SheetClose>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link
                  href="/home"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <SheetClose className="flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground text-red-500">
                    <LineChart className="h-4 w-4" />
                    خروج
                  </SheetClose>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <span className="mr-4 hidden text-sm text-muted-foreground sm:block">
            {Today}
          </span>
          <div className="mr-auto flex gap-2">
            <Link href={"/home"}>
              <Button>بازگشت به سایت</Button>
            </Link>
            <Separator className="h-10" orientation="vertical" />
            <SwitchTheme />
          </div>
        </header>
        <section className="relative">
          <div
            className={`fixed -z-50 h-screen w-screen bg-[url('/pattern2.png')] ${theme === "dark" && "invert"} bg-repeat opacity-25`}
          ></div>
          <section className="absolute flex h-[93vh] w-full flex-col gap-4 overflow-x-hidden overflow-y-scroll p-4 lg:gap-8 lg:p-8">
            {children}
          </section>
          <div className="h-[93vh] w-full object-cover"></div>
        </section>
      </div>
    </div>
  );
}
