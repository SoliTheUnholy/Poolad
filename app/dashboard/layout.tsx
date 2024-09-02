"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { signOut, useSession } from "next-auth/react";
import NewOrder from "@/components/neworder";
import { useRouter } from "next/navigation";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useSession();
  const pathname = usePathname();
  const router = useRouter();
  if (session.status !== "authenticated") {
    router.push("/home");
  }
  const options = { year: "numeric", month: "long", day: "numeric" };
  const Today = new Date().toLocaleDateString("fa-IR", options as any);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-l bg-muted/40 md:block">
        <div className="flex flex-col">
          <div className="flex h-[7vh] items-center border-b px-4 lg:h-[7vh] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
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
                      سفارشات
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                          <PackagePlus className="h-4 w-4" />
                          ثبت سفارش جدید
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <NewOrder />
                      </DialogContent>
                    </Dialog>
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
                  <Package2 className="h-6 w-6" />
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
                        سفارشات
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <SheetClose className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                            <PackagePlus className="h-4 w-4" />
                            ثبت سفارش جدید
                          </SheetClose>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>ثبت سفارش جدید</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when
                              re done.
                            </DialogDescription>
                          </DialogHeader>
                          <NewOrder></NewOrder>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
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
          <span className="text-sm text-muted-foreground">{Today}</span>
          <div>
            <Link href={"/home"}>
              <Button>بازگشت به سایت</Button>
            </Link>
          </div>
        </header>
        <section className="relative">
          <div className="fixed -z-50 h-screen w-screen bg-[url('/pattern2.png')] bg-repeat opacity-25"></div>
          <section className="absolute flex h-[93vh] w-full flex-col gap-4 overflow-x-hidden overflow-y-scroll p-4 lg:gap-8 lg:p-8">
            {children}
          </section>
          <div className="h-[93vh] w-full object-cover"></div>
        </section>
      </div>
    </div>
  );
}
