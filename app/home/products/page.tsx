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
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
  const router = useRouter();
  const [animation, setAnimation] = useState(false);
  const [current, setCurrent] = useState(2);
  return (
    <>
      <div
        className={` ${animation && "animate-fade-out-left opacity-0"} animate-fade-in-left relative h-auto min-h-[85svh]`}
      >
        <Button
          className={`absolute start-3/4 top-1/2 z-20 h-14 w-14 origin-top rounded-full transition-all ease-out hover:scale-110`}
          onClick={() => setCurrent(((current + 1) % 3) + 1)}
        >
          <ArrowLeftIcon />
          <span className="sr-only">Next slide</span>
        </Button>
        <Card
          onClick={() => setCurrent(1)}
          className={`absolute top-0 z-0 mt-4 grid h-auto w-[50vw] max-w-96 origin-top scale-75 overflow-hidden bg-opacity-10 transition-all duration-300 ${current === 1 ? "start-1/2 top-1/2 z-10 origin-center -translate-y-1/2 translate-x-1/2 scale-125 brightness-125" : ""} ${current === 2 ? "start-full translate-x-full" : ""} ${current === 3 ? "start-0 translate-x-0" : ""} `}
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
          className={`absolute top-0 z-0 mt-4 grid h-auto w-[50vw] max-w-96 origin-top scale-75 overflow-hidden bg-opacity-10 transition-all duration-300 ${current === 2 ? "start-1/2 top-1/2 z-10 origin-center -translate-y-1/2 translate-x-1/2 scale-125 brightness-125" : ""} ${current === 3 ? "start-full translate-x-full" : ""} ${current === 1 ? "start-0 translate-x-0" : ""} `}
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
          className={`absolute top-0 z-0 mt-4 grid h-auto w-[50vw] max-w-96 origin-top scale-75 overflow-hidden bg-opacity-10 transition-all duration-300 ${current === 3 ? "start-1/2 top-1/2 z-10 origin-center -translate-y-1/2 translate-x-1/2 scale-125 brightness-125" : ""} ${current === 1 ? "start-full translate-x-full" : ""} ${current === 2 ? "start-0 translate-x-0" : ""}`}
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
          className={`absolute start-1/4 top-1/2 z-20 h-14 w-14 translate-x-full rounded-full transition-all ease-out hover:scale-110`}
          onClick={() => setCurrent((current % 3) + 1)}
        >
          <ArrowRightIcon />
          <span className="sr-only">Next slide</span>
        </Button>
        <Button
          onClick={async () => {
            setAnimation(true);
            await sleep(500);
            switch (current) {
              case 1:
                router.push("./products/lattice");
                break;
              case 2:
                router.push("./products/coil");
                break;
              default:
                router.push("./products/drawn");
            }
          }}
          className={`absolute bottom-8 start-8 z-20 gap-2 rounded-xl transition-all ease-out hover:scale-110`}
        >
          <ArrowRightIcon />
          <span>ثبت سفارش</span>
        </Button>
      </div>
    </>
  );
}
