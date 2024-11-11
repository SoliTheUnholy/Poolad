"use client";
import { availability } from "@/actions/availability";
import { AutoCarousel } from "@/components/autoCarousel";
import CoilTable from "@/components/coilTable";
import DrawnTable from "@/components/drawnTable";
import Lattice from "@/components/latticeGrider";
import LatticeTable from "@/components/latticeTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCaption,
  Table,
} from "@/components/ui/table";
import coil from "@/models/coils";
import drawn from "@/models/drawns";
import {
  ArrowRightIcon,
  Building2,
  Cog,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState<any>();
  const [coil, setCoil] = useState<any>();
  const [drawn, setDrawn] = useState<any>();
  useEffect(() => {
    availability(1, [{}, {}]).then((dat: any) => setData(dat));
    availability(2, [{}, {}]).then((dat: any) => setCoil(dat));
    availability(3, [{}, {}]).then((dat: any) => setDrawn(dat));
  }, []);
  return (
    <div className="mx-8 mt-4 grid gap-4 md:mx-16 lg:mx-24">
      <div className="relative h-auto overflow-hidden rounded-lg rounded-b-lg">
        <div className="absolute z-20 h-[50vh] w-full bg-foreground/15">
          <div className="absolute start-1/2 top-1/2 z-20 grid w-fit -translate-y-1/2 translate-x-1/2 gap-4 text-background lg:start-1/4 lg:translate-x-1/4">
            <h2 className="min-w-48 text-center text-4xl font-bold lg:text-6xl">
              با ما بسازید!
            </h2>
            <h3 className="text-xl font-bold lg:text-2xl">
              ساخت بناهای استاندارد و مقاوم
            </h3>
            <Link href={"/home/products"}>
              <Button
                variant={"outline"}
                className="w-full border-2 bg-muted !text-lg text-foreground md:p-6 lg:!text-2xl"
              >
                ثبت سفارش
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-[50vh]">
          <AutoCarousel />
        </div>
      </div>
      <div className="">
        <Card className="grid gap-4 border-none bg-muted p-4 md:p-8">
          <h2 className="text-xl font-black text-foreground">
            چرا پولاد سقف ؟
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-1">
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Users className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">کادر متخصص</h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  به کار گیری مهندسین و کارگران حرفه ای
                </p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Building2 className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">
                  بناهاى استاندارد
                </h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  ساخت بناهاى استاندارد ومقاوم در برابر حوادث
                </p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Cog className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">
                  بهترين ماشين آلات
                </h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  بهترين ماشين آلات تمام اتوماتيك روز اروپايى
                </p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <TrendingUp className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">
                  ظرفيت توليد بالا
                </h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  ظرفيت توليد ساليانه حدود 50000 تن خرپاى ميلگردى
                </p>
              </div>
            </Card>
          </div>
        </Card>
      </div>
      <div className="">
        <Card className="grid gap-4 border-none bg-muted p-4 md:p-8">
          <h2 className="text-xl font-black text-foreground">محصولات</h2>
          <div
            className={`grid animate-fade-in-left gap-4 md:grid-cols-2 lg:grid-cols-3`}
          >
            <Card
              className={`z-0 grid h-auto overflow-hidden border-none bg-opacity-10 transition-all hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="text-foreground">
                <CardTitle className="text-base font-bold md:text-lg">
                  خرپا
                </CardTitle>
              </CardHeader>
              <CardContent className="flex max-w-64 items-center justify-self-center">
                <Lattice />
              </CardContent>
              <CardFooter className="grid grid-cols-2">
                <Link href={"/home/products"}>
                  <Button
                    className={`w-full min-w-32 gap-4 rounded-xl border-none transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon />
                    <span className="text-xs font-bold md:text-sm">
                      ثبت سفارش
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`z-0 grid h-auto overflow-hidden border-none bg-opacity-10 transition-all hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="text-foreground">
                <CardTitle className="text-base font-bold md:text-lg">
                  کلاف
                </CardTitle>
              </CardHeader>
              <CardContent className="flex max-w-64 items-center justify-self-center">
                <Image
                  className="aspect-square rotate-45"
                  src={"/hcoil.png"}
                  height={1500}
                  width={1500}
                  alt={""}
                ></Image>
              </CardContent>
              <CardFooter className="grid grid-cols-2">
                <Link href={"/home/products"}>
                  <Button
                    className={`w-full min-w-32 gap-4 rounded-xl border-none transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon />
                    <span className="text-xs font-bold md:text-sm">
                      ثبت سفارش
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`z-0 grid h-auto overflow-hidden border-none bg-opacity-10 transition-all hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="text-foreground">
                <CardTitle className="text-base font-bold md:text-lg">
                  کلاف کشیده
                </CardTitle>
              </CardHeader>
              <CardContent className="flex max-w-64 items-center justify-self-center">
                <Image
                  className="aspect-square rotate-6"
                  src={"/coil.png"}
                  height={1500}
                  width={1500}
                  alt={""}
                ></Image>
              </CardContent>
              <CardFooter className="grid grid-cols-2">
                <Link href={"/home/products"}>
                  <Button
                    className={`w-full min-w-32 gap-4 rounded-xl border-none transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon />
                    <span className="text-xs font-bold md:text-sm">
                      ثبت سفارش
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <h2 className="mt-4 text-xl font-black text-foreground">
            لیست موجودی
          </h2>
          <div className="flex w-full flex-col flex-wrap gap-4 md:flex-row">
            <Card className="grow">
              <CardHeader>
                <CardTitle>خرپا</CardTitle>
              </CardHeader>
              <Table className="m-8 grid w-auto lg:mt-0">
                <TableHeader className="">
                  <TableRow className="flex items-center justify-around">
                    <TableHead>ارتفاع</TableHead>
                    <TableHead>راس</TableHead>
                    <TableHead>قائده</TableHead>
                    <TableHead>قیمت</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.map((product: any) => (
                    <TableRow
                      className="grid grid-cols-4 items-center"
                      key={product._id}
                    >
                      <LatticeTable
                        id={product._id.toString()}
                        height={product.height}
                        top={product.top}
                        bottom={product.bottom}
                        price={product.price}
                      ></LatticeTable>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption>محصولات قابل سفارش</TableCaption>
              </Table>
            </Card>
            <Card className="grow">
              <CardHeader>
                <CardTitle>کلاف</CardTitle>
              </CardHeader>
              <Table className="m-8 grid w-auto lg:mt-0">
                <TableHeader>
                  <TableRow className="flex items-center justify-around">
                    <TableHead>قطر</TableHead>
                    <TableHead>نوع</TableHead>
                    <TableHead>آجدار</TableHead>
                    <TableHead>تولیدی</TableHead>
                    <TableHead>قیمت</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coil?.map((product: any) => (
                    <TableRow
                      className="grid grid-cols-5 items-center"
                      key={product._id}
                    >
                      <CoilTable
                        id={product._id.toString()}
                        diameter={product.diameter}
                        type={product.type}
                        ribbed={product.ribbed}
                        producer={product.producer}
                        price={product.price}
                      ></CoilTable>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption>محصولات قابل سفارش</TableCaption>
              </Table>
            </Card>
            <Card className="grow">
              <CardHeader>
                <CardTitle>کلاف کشیده</CardTitle>
              </CardHeader>
              <Table className="m-8 grid w-auto lg:mt-0">
                <TableHeader>
                  <TableRow className="flex items-center justify-around">
                    <TableHead>قطر</TableHead>
                    <TableHead>آجدار</TableHead>
                    <TableHead>قیمت</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {drawn?.map((product: any) => (
                    <TableRow
                      className="grid grid-cols-3 items-center"
                      key={product._id}
                    >
                      <DrawnTable
                        id={product._id.toString()}
                        diameter={product.diameter}
                        ribbed={product.ribbed}
                        price={product.price}
                      ></DrawnTable>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption>محصولات قابل سفارش</TableCaption>
              </Table>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
