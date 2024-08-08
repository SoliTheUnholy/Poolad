"use client";
import Image from "next/image";

import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  MessageSquare,
  Package,
  Package2,
  PackagePlus,
  PackageSearch,
  Search,
  ShoppingCart,
  Slash,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-l bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">ناژو</span>
            </Link>
            <Button variant="outline" size="icon" className="mr-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/username"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Home className="h-4 w-4" />
                داشبورد
              </Link>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <span
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
                    >
                      <Package className="h-4 w-4" />
                      سفارشات
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link
                      href="/username"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
                    >
                      <PackagePlus className="h-4 w-4" />
                      ثبت سفارش جدید
                    </Link>
                    <Link
                      href="/username"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
                    >
                      <PackageSearch className="h-4 w-4" />
                      لیست سفارشات
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href="/username/products"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                مدیریت فایل ها
              </Link>
              <Link
                href="/username/products"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                شارژ حساب
              </Link>
              <Link
                href="/username/products"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                پنل ویژه ناشرین
              </Link>
              <Link
                href="/username/products"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                تاریخچه موجودی
              </Link>
              <Link
                href="/username/products"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                ارتباط با مدیریت
              </Link>
              <Link
                href="/username/products"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Package className="h-4 w-4" />
                امتیازت من
              </Link>
              <Link
                href="/username/customers"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <Users className="h-4 w-4" />
                تغییر مشخصات اکانت
              </Link>
              <Link
                href="/username/analytics"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <LineChart className="h-4 w-4" />
                تغییر شماره اطلاع رسانی
              </Link>
              <Link
                href="/username/analytics"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <LineChart className="h-4 w-4" />
                تغییر رمز
              </Link>
              <Link
                href="/username/analytics"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-red-500 transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : ""}`}
              >
                <LineChart className="h-4 w-4" />
                خروج{" "}
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>پشتیبانی آنلاین</CardTitle>
                <CardDescription>
                  {" "}
                  ارتباط انلاین با کارشناسان ما صبح 9 الی 13 و عصر 15 الی 18
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full gap-1">
                  <MessageSquare className="h-4 w-4" />
                  شروع گفتگو{" "}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
            <SheetContent side="right" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center justify-end gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Nazho</span>
                </Link>
                <Link href="/username">
                  <SheetClose
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/" ? "bg-muted text-foreground" : ""}`}
                  >
                    <Home className="h-5 w-5" />
                    داشبورد
                  </SheetClose>
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <Link href="/username">
                        <SheetClose
                          className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/" ? "bg-muted text-foreground" : ""}`}
                        >
                          <Package className="h-5 w-5" />
                          سفارشات
                        </SheetClose>
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="/username">
                        <SheetClose
                          className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/" ? "bg-muted text-foreground" : ""}`}
                        >
                          <PackagePlus className="h-5 w-5" />
                          ثبت سفارش جدید
                        </SheetClose>
                      </Link>
                      <Link href="/username">
                        <SheetClose
                          className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/" ? "bg-muted text-foreground" : ""}`}
                        >
                          <PackageSearch className="h-5 w-5" />
                          لیست سفارشات
                        </SheetClose>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/username">
                  <SheetClose
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/" ? "bg-muted text-foreground" : ""}`}
                  >
                    <Package className="h-5 w-5" />
                    محصولات
                  </SheetClose>
                </Link>
                <Link href="/username">
                  <SheetClose
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/" ? "bg-muted text-foreground" : ""}`}
                  >
                    <Users className="h-5 w-5" />
                    مشتریان
                  </SheetClose>
                </Link>
                <Link href="/username">
                  <SheetClose
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${pathname === "/" ? "bg-muted text-foreground" : ""}`}
                  >
                    <LineChart className="h-5 w-5" />
                    آمار
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
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">داشبورد</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">سفارشات</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>آخرین سفارشات</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative mr-auto flex-1 md:grow-0">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="جستوجوی محصولات"
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-[200px] lg:w-[320px]"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
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
              <DropdownMenuItem className="text-red-500">خروج</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <section className="relative">
          <section className="absolute w-full">{children}</section>
          <Image
            className="h-svh object-cover"
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
