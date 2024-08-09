"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  CircleUser,
  CreditCard,
  DollarSign,
  Home,
  LineChart,
  Menu,
  MessageSquare,
  Package,
  Package2,
  PackagePlus,
  PackageSearch,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const balance = "37,000";
  const options = { year: "numeric", month: "long", day: "numeric" };
  const Today = new Date().toLocaleDateString("fa-IR", options);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-l bg-muted/40 md:block">
        <div className="flex flex-col">
          <div className="flex h-[7vh] items-center border-b px-4 lg:h-[7vh] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">ناژو</span>
            </Link>
            <Button variant="outline" size="icon" className="mr-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
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
              <Link
                href="/dashboard/neworder"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/neworder" ? "bg-muted text-primary" : ""}`}
              >
                <PackagePlus className="h-4 w-4" />
                ثبت سفارش جدید
              </Link>
              <Link
                href="/dashboard/orderslist"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/orderlist" ? "bg-muted text-primary" : ""}`}
              >
                <PackageSearch className="h-4 w-4" />
                لیست سفارشات
              </Link>
              <Link
                href="/dashboard/files"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/files" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                مدیریت فایلها
              </Link>
              <Link
                href="/dashboard/addfunds"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/addfunds" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                شارژ حساب
              </Link>
              <Link
                href="/dashboard/publishers"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/publishers" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                پنل ویژه ناشرین
              </Link>
              <Link
                href="/dashboard/balancehistory"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/balancehistory" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                تاریخچه موجودی
              </Link>
              <Link
                href="/dashboard/contactmanagement"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/contactmanagement" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                ارتباط با مدیریت
              </Link>
              <Link
                href="/dashboard/points"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/points" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                امتیازت من
              </Link>
              <Link
                href="/dashboard/changeinfo"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changeinfo" ? "bg-muted text-primary" : ""}`}
              >
                <Users className="h-4 w-4" />
                تغییر مشخصات اکانت
              </Link>
              <Link
                href="/dashboard/changenumber"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/dashboard/changenumber" ? "bg-muted text-primary" : ""}`}
              >
                <LineChart className="h-4 w-4" />
                تغییر شماره اطلاع رسانی
              </Link>
              <Link
                href="/dashboard/changepassword"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <LineChart className="h-4 w-4" />
                تغییر رمز
              </Link>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-red-500 transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                خروج
              </Link>
            </nav>
            <div className="p-4">
              <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>پشتیبانی آنلاین</CardTitle>
                  <CardDescription>
                    ارتباط انلاین با کارشناسان ما صبح 9 الی 13 و عصر 15 الی 18
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full gap-1">
                    <MessageSquare className="h-4 w-4" />
                    شروع گفتگو
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-[7vh] shrink-0 items-center justify-between border-b bg-muted/40 px-4 lg:h-[7vh] lg:px-6">
          <Sheet>
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
              <section className="mt-7 flex justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">ناژو</span>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-auto h-8 w-8"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </section>
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="/dashboard">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    داشبورد
                  </SheetClose>
                </Link>
                <Link href="/dashboard/neworder">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/neworder" ? "bg-muted text-primary" : ""}`}
                  >
                    <PackagePlus className="h-4 w-4" />
                    ثبت سفارش جدید
                  </SheetClose>
                </Link>
                <Link href="/dashboard/orderslist">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/orderslist" ? "bg-muted text-primary" : ""}`}
                  >
                    <PackageSearch className="h-4 w-4" />
                    لیست سفارشات
                  </SheetClose>
                </Link>
                <Link href="/dashboard/files">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/files" ? "bg-muted text-primary" : ""}`}
                  >
                    <Package className="h-4 w-4" />
                    مدیریت فایلها
                  </SheetClose>
                </Link>
                <Link href="/dashboard/addfunds">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/addfunds" ? "bg-muted text-primary" : ""}`}
                  >
                    <Package className="h-4 w-4" />
                    شارژ حساب
                  </SheetClose>
                </Link>
                <Link href="/dashboard/publishers">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/publishers" ? "bg-muted text-primary" : ""}`}
                  >
                    <Package className="h-4 w-4" />
                    پنل ویژه ناشرین
                  </SheetClose>
                </Link>
                <Link href="/dashboard/balancehistory">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/balancehistory" ? "bg-muted text-primary" : ""}`}
                  >
                    <Package className="h-4 w-4" />
                    تاریخچه موجودی
                  </SheetClose>
                </Link>
                <Link href="/dashboard/contactmanagement">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/contactmanagement" ? "bg-muted text-primary" : ""}`}
                  >
                    <Package className="h-4 w-4" />
                    ارتباط با مدیریت
                  </SheetClose>
                </Link>
                <Link href="/dashboard/points">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/points" ? "bg-muted text-primary" : ""}`}
                  >
                    <Package className="h-4 w-4" />
                    امتیازت من
                  </SheetClose>
                </Link>
                <Link href="/dashboard/changeinfo">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/changeinfo" ? "bg-muted text-primary" : ""}`}
                  >
                    <Users className="h-4 w-4" />
                    تغییر مشخصات اکانت
                  </SheetClose>
                </Link>
                <Link href="/dashboard/changenumber">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/changenumber" ? "bg-muted text-primary" : ""}`}
                  >
                    <LineChart className="h-4 w-4" />
                    تغییر شماره اطلاع رسانی
                  </SheetClose>
                </Link>
                <Link href="/dashboard/changepassword">
                  <SheetClose
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/dashboard/changepassword" ? "bg-muted text-primary" : ""}`}
                  >
                    <LineChart className="h-4 w-4" />
                    تغییر رمز
                  </SheetClose>
                </Link>
                <Link href="/">
                  <SheetClose className="flex w-full items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground text-red-500 hover:text-foreground">
                    <LineChart className="h-4 w-4" />
                    خروج
                  </SheetClose>
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>پشتیبانی آنلاین</CardTitle>
                    <CardDescription>
                      ارتباط انلاین با کارشناسان ما صبح 9 الی 13 و عصر 15 الی 18
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SheetClose>
                      <Button size="sm" className="flex w-full gap-4">
                        <MessageSquare className="h-5 w-5" />
                        شروع گفتگو
                      </Button>
                    </SheetClose>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <span className="text-sm text-muted-foreground">{Today}</span>
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="mx-3">
                <DropdownMenuLabel>سهیل</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>تنظیمات</DropdownMenuItem>
                <DropdownMenuItem>تغییر رمز</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  خروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <section className="relative">
          <section className="absolute flex flex-col h-[93vh] w-full gap-4 overflow-x-hidden overflow-y-scroll p-4 lg:gap-8 lg:p-8">
            <div className="grid h-min grid-rows-1 gap-4 md:grid-cols-3">
              <Card className="row-span-1 flex flex-col justify-between">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    موجودی ها
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    فعلی: {balance} تومان
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="gap-1 self-end">
                    تاریخچه <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="row-span-1 flex flex-col justify-between">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    شارژ کیف پول
                  </CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    با شارژ حساب می توانید بدهی قبلی خود را به راحتی پرداخت
                    نمایید
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="gap-1 self-end">
                    پرداخت
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="row-span-1 flex flex-col justify-between">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    مدیریت فایلها
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    فایلهای پرتکرار خود را ذخیر کنید و از هرجا و هرزمان که تمایل
                    داشتید سفارش خود را ثبت کنید
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="gap-1 self-end">
                    ورود
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {children}
          </section>
          <Image
            className="h-[93vh] w-full object-cover"
            src="/office.png"
            width={1920}
            height={1080}
            alt={"Image of office"}
          ></Image>
        </section>
      </div>
    </div>
  );
}
