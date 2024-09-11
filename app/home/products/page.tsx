"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Lattice from "@/components/latticeGrider";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { LatticeForm } from "@/components/latticeForm";
import { CoilForm } from "@/components/coilForm";
import { DrawnForm } from "@/components/drawnForm";

export default function ProductsPage() {
  const [current, setCurrent] = useState(2);
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <Container>
        <div className="-mt-2 grid h-auto min-h-[85svh] items-center justify-center rounded-xl bg-muted sm:grid-cols-3 sm:flex-row md:-mt-4 lg:-mt-8">
          <Button
            className={`absolute ${hidden ? "" : "hidden"} bottom-8 end-8 z-30 gap-2 rounded-xl`}
            onClick={() => setHidden(false)}
          >
            <ArrowLeftIcon />
            <span> محصولات</span>
          </Button>
          <Button
            className={`absolute start-3/4 top-1/2 ${hidden && current !== 0 ? "top-0 scale-0 opacity-0 transition-all duration-300" : ""} z-20 h-14 w-14 rounded-full`}
            onClick={() => setCurrent(((current + 1) % 3) + 1)}
          >
            <ArrowLeftIcon />
            <span className="sr-only">Next slide</span>
          </Button>
          <Card
            onClick={() => setCurrent(1)}
            className={`absolute z-0 grid h-auto w-[50vw] max-w-96 -translate-y-1/2 scale-75 overflow-hidden bg-opacity-10 backdrop-blur-none transition-all duration-300 ${current === 1 ? "start-1/2 top-1/2 z-10 translate-x-1/2 scale-125 shadow-xl backdrop-blur-sm [&_img]:brightness-150" : "top-1/4 w-[45vw]"} ${current === 2 ? "start-full translate-x-full" : ""} ${current === 3 ? "start-0" : ""} ${hidden && current === 1 ? "relative start-0 top-0 col-span-1 w-full translate-x-0 translate-y-0 scale-100 bg-transparent shadow-none drop-shadow-md" : ""} ${hidden && current !== 1 ? "top-0 scale-0 opacity-0 transition-all duration-300" : ""} [&_img]:transition-all [&_img]:duration-300 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110`}
          >
            <CardHeader className="text-xl text-foreground sm:text-2xl">
              <CardTitle>خرپا</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Lattice />
            </CardContent>
            <CardFooter className=""></CardFooter>
          </Card>
          <Card
            onClick={() => setCurrent(2)}
            className={`absolute z-0 grid h-auto w-[50vw] max-w-96 -translate-y-1/2 scale-75 overflow-hidden bg-opacity-10 backdrop-blur-none transition-all duration-300 ${current === 2 ? "start-1/2 top-1/2 z-10 translate-x-1/2 scale-125 shadow-xl backdrop-blur-sm [&_img]:brightness-150" : "top-1/4 w-[45vw]"} ${current === 3 ? "start-full translate-x-full" : ""} ${current === 1 ? "start-0" : ""} ${hidden && current === 2 ? "relative start-0 top-0 col-span-1 w-full translate-x-0 translate-y-0 scale-100 bg-transparent shadow-none drop-shadow-md" : ""} ${hidden && current !== 2 ? "top-0 scale-0 opacity-0 transition-all duration-300" : ""} [&_img]:transition-all [&_img]:duration-300 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110`}
          >
            <CardHeader className="text-xl text-foreground sm:text-2xl">
              <CardTitle className="">کلاف</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Image
                className="aspect-square rotate-45"
                src={"/hcoil.png"}
                height={1500}
                width={1500}
                alt={""}
              ></Image>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Card
            onClick={() => setCurrent(3)}
            className={`absolute z-0 grid h-auto w-[50vw] max-w-96 -translate-y-1/2 scale-75 overflow-hidden bg-opacity-10 backdrop-blur-none transition-all duration-300 ${current === 3 ? "start-1/2 top-1/2 z-10 translate-x-1/2 scale-125 shadow-xl backdrop-blur-sm [&_img]:brightness-150" : "top-1/4 w-[45vw]"} ${hidden && current === 3 ? "relative start-0 top-0 col-span-1 w-full translate-x-0 translate-y-0 scale-100 bg-transparent shadow-none drop-shadow-md" : ""} ${hidden && current !== 3 ? "top-0 scale-0 opacity-0 transition-all duration-300" : ""} ${current === 1 ? "start-full translate-x-full" : ""} ${current === 2 ? "start-0" : ""} [&_img]:transition-all [&_img]:duration-300 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110`}
          >
            <CardHeader className="text-xl text-foreground sm:text-2xl">
              <CardTitle>کلاف کشیده</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Image
                className="aspect-square rotate-6"
                src={"/coil.png"}
                height={1500}
                width={1500}
                alt={""}
              ></Image>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Button
            className={`absolute start-1/4 top-1/2 z-20 h-14 w-14 translate-x-full ${hidden && current !== 0 ? "top-0 scale-0 opacity-0 transition-all duration-300" : ""} rounded-full`}
            onClick={() => setCurrent((current % 3) + 1)}
          >
            <ArrowRightIcon />
            <span className="sr-only">Next slide</span>
          </Button>
          <Button
            className={`absolute ${hidden ? "hidden" : ""} bottom-8 start-8 z-20 gap-2 rounded-xl`}
            onClick={() => setHidden(true)}
          >
            <ArrowRightIcon />
            <span>ثبت سفارش</span>
          </Button>
          <div
            className={`sm:col-span-2 ${hidden ? "" : "hidden"} z-20 w-full`}
          >
            {current === 1 && <LatticeForm />}
            {current === 2 && <CoilForm />}
            {current === 3 && <DrawnForm />}
          </div>
        </div>
      </Container>
    </>
  );
}
