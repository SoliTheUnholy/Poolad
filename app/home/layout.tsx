"use client";
import Image from "next/image";
import Link from "next/link";
import { CirclePlus, CircleUser, Headset, Home, Menu } from "lucide-react";
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
import { signOut, useSession } from "next-auth/react";
import Loading from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SwitchTheme } from "@/components/modeToggle";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
const currentYear = new Date().getFullYear();

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status, data } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
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
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 bg-muted px-4 md:px-6">
          <nav className="hidden flex-col gap-3 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-5">
            <Link
              href="/home/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image
                className="h-10 w-10 dark:invert"
                height={24}
                width={24}
                src={"/logo.png"}
                alt={""}
              />
              <span>تعاونی پولاد سقف خلیج فارس</span>
            </Link>
            <Separator orientation="vertical" className="h-10" />
            <Link
              href="/home/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home" ? "text-lg font-bold text-primary" : ""}`}
            >
              خانه
            </Link>
            <Link
              href="/home/products"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname.includes("/home/products") ? "text-lg font-bold text-primary" : ""}`}
            >
              محصولات
            </Link>
            <Link
              href="/home/about"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/about" ? "text-lg font-bold text-primary" : ""}`}
            >
              درباره ما
            </Link>
            <Link
              href="/home/contact"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/contact" ? "text-lg font-bold text-primary" : ""}`}
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
                <Menu className="h-6 w-6" />
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
                  <Image
                    className="h-10 w-10 dark:invert"
                    height={24}
                    width={24}
                    src={"/logo.png"}
                    alt={""}
                  />
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
            <div className="flex flex-row items-center gap-2">
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
              <Separator className="h-10" orientation="vertical" />
              <SwitchTheme />
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2">
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger>
                  <Button className="flex flex-row gap-2 rounded-full">
                    <CircleUser className="h-6 w-6" />
                    <span>{data.user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    خوش آمدید !
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="font-bold"
                    onClick={() => {
                      router.push("/dashboard");
                    }}
                  >
                    ورود به پنل
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="font-bold text-red-500"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    خروج
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Separator className="h-10" orientation="vertical" />
              <SwitchTheme />
            </div>
          )}
        </header>
        <div
          className={` ${theme === "dark" && "invert"} fixed -z-50 h-screen w-screen bg-[url('/pattern.png')] bg-repeat`}
        ></div>
        {children}
        <div className="fixed bottom-0 z-30 flex h-24 w-full justify-center rounded-3xl bg-clip-content p-4 sm:hidden">
          <Link
            href={"/home"}
            className="-ml-[2px] flex h-[61.5px] grow items-center justify-center rounded-r-full bg-primary/95 shadow-lg"
          >
            <div className="w-18 flex flex-col items-center justify-center gap-1 text-xs font-bold text-white">
              <Home className="ml-1 h-6 w-6 stroke-2" />
              <h3 className="w-20 text-center">خانه</h3>
            </div>
          </Link>
          <Link
            href={"/home/products"}
            className="flex h-[65px] w-[103px] items-end justify-center overflow-hidden text-background opacity-95 drop-shadow-lg"
          >
            <svg width="103px" height="84px">
              <path
                className="fill-primary"
                fillRule="evenodd"
                d="M1.1000,18.1000 L100.000,18.1000 L100.000,81.000 L1.1000,81.000 L1.1000,18.1000 ZM50.1000,1.1000 C68.397,1.1000 82.500,16.103 82.500,33.500 C82.500,50.897 68.397,65.000 50.1000,65.000 C33.603,65.000 19.500,50.897 19.500,33.500 C19.500,16.103 33.603,1.1000 50.1000,1.1000 Z"
              />
            </svg>
            <h3 className="absolute z-50 mb-[2px] text-xs font-bold text-white">
              ثبت سفارش
            </h3>
          </Link>
          <Link
            href={"/home/products"}
            className="absolute mb-9 ml-[1px] flex h-14 w-14 items-center justify-center self-center justify-self-center rounded-full bg-primary opacity-95 shadow-md"
          >
            <CirclePlus className="h-12 w-12 stroke-[1.5px] text-white" />
          </Link>
          <a
            href="tel:07191099114"
            className="flex h-[61.5px] grow items-center justify-center rounded-l-full bg-primary/95 shadow-lg"
          >
            <div className="w-18 flex flex-col items-center justify-center gap-1 text-xs font-bold text-white">
              <Headset className="ml-1 h-6 w-6 stroke-2" />
              <h3 className="w-20 text-center">پشتیبانی</h3>
            </div>
          </a>
        </div>
        <footer className="mt-4 rounded-t-lg bg-muted">
          <Card className="rounded-t-lg border-none px-3 pb-24 sm:pb-0">
            <CardHeader>
              <CardTitle>شركت تعاوني پولاد سقف خليج فارس</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between gap-4">
              <div className="flex flex-col gap-2">
                <section className="flex gap-2">
                  <h5 className="font-bold">آدرس:</h5>
                  <section className="flex flex-col">
                    <a
                      target="_blank"
                      className="hover:text-primary"
                      href="https://maps.google.com/?q=29.478706374677504,52.54372870296799"
                    >
                      شیراز، شهرک صنعتی بزرگ شیراز، بلوار صنعت جنوبی، خیابان
                      101، فرعی 103
                    </a>
                    <a
                      className="hover:text-primary"
                      target="_blank"
                      href="https://www.google.com/maps?saddr=My+Location&daddr=29.478706374677504,52.54372870296799"
                    >
                      مسیریابی
                    </a>
                  </section>
                </section>
                <section className="flex gap-2">
                  <h5 className="font-bold">شماره تماس:</h5>
                  <section className="flex flex-col">
                    <a
                      target="_blank"
                      className="hover:text-primary"
                      href="tel:07191099114"
                    >
                      07191099114
                    </a>
                    <p>
                      داخلی های فروش 115-117-119 <br />
                      داخلی های حسابداری 105-106-107-108
                    </p>
                  </section>
                </section>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <Image
                  width={75}
                  height={100}
                  src={"/enamad.png"}
                  alt={""}
                ></Image>
                <Image
                  width={75}
                  height={100}
                  src={"/samandehi.png"}
                  alt={""}
                ></Image>
              </div>
            </CardContent>
            <CardFooter className="border-t-2 border-muted-foreground p-3">
              <div className="bordergray-50 flex w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between">
                <span className="mb-4 text-center font-normal md:mb-0">
                  &copy; {currentYear} تعاوني پولاد سقف خليج فارس
                </span>
                <div className="flex gap-4 sm:justify-center">
                  <a
                    target="_blank"
                    href="https://t.me/PooladSaghf_TPS"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-6 w-6"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      stroke-linejoin="round"
                    >
                      <path
                        id="telegram-1"
                        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://instagram.com/pooladsaghfcoop"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://wa.me/+989101179114"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </CardFooter>
          </Card>
        </footer>
      </div>
    </>
  );
}
