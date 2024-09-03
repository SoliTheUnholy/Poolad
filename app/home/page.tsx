"use client";
import Lattice from "@/components/latticeGrider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState(2);

  return (
    <>
      <div className="bg-muted">
        <div className="relative mx-auto mt-10 h-[90vh] w-full justify-center lg:w-5/6 xl:w-2/3">
          <Button
            className="absolute start-3/4 top-1/2 z-20 h-14 w-14 rounded-full"
            onClick={() => setCurrent((current % 3) + 1)}
          >
            <ArrowLeftIcon />
            <span className="sr-only">Next slide</span>
          </Button>
          <Card
            onClick={() => setCurrent(1)}
            className={`absolute z-0 grid h-fit w-[50vw] max-w-96 -translate-y-1/2 scale-75 overflow-hidden bg-opacity-10 backdrop-blur-none transition-all duration-500 ${current === 1 ? "start-1/2 top-1/2 z-10 translate-x-1/2 scale-125 ring-2 shadow-xl ring-primary [&_img]:brightness-150" : "top-1/4"} ${current === 2 ? "start-full translate-x-full" : ""} ${current === 3 ? "start-0" : ""} [&_img]:transition-all [&_img]:duration-500 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110`}
          >
            <CardHeader className="text-xl text-foreground sm:text-2xl md:text-4xl">
              <CardTitle>خرپا</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Lattice />
            </CardContent>
            <CardFooter className=""></CardFooter>
          </Card>
          <Card
            onClick={() => setCurrent(2)}
            className={`absolute z-0 grid h-fit w-[50vw] max-w-96 -translate-y-1/2 scale-75 overflow-hidden bg-opacity-10 backdrop-blur-none transition-all duration-500 ${current === 2 ? "start-1/2 top-1/2 z-10 translate-x-1/2 scale-125 ring-2 shadow-xl ring-primary [&_img]:brightness-150" : "top-1/4"} ${current === 3 ? "start-full translate-x-full" : ""} ${current === 1 ? "start-0" : ""} [&_img]:transition-all [&_img]:duration-500 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110`}
          >
            <CardHeader className="text-xl text-foreground sm:text-2xl md:text-4xl">
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
            className={`absolute z-0 grid h-fit w-[50vw] max-w-96 -translate-y-1/2 scale-75 overflow-hidden bg-opacity-10 backdrop-blur-none transition-all duration-500 ${current === 3 ? "start-1/2 top-1/2 z-10 translate-x-1/2 scale-125 ring-2 shadow-xl ring-primary [&_img]:brightness-150" : "top-1/4"} ${current === 1 ? "start-full translate-x-full" : ""} ${current === 2 ? "start-0" : ""} [&_img]:transition-all [&_img]:duration-500 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110`}
          >
            <CardHeader className="text-xl text-foreground sm:text-2xl md:text-4xl">
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
            className="absolute start-1/4 top-1/2 z-20 h-14 w-14 translate-x-full rounded-full"
            onClick={() => setCurrent((current % 3) + 1)}
          >
            <ArrowRightIcon />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </>
  );
}
