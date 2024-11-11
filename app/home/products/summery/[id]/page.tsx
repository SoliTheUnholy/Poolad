"use client";
import Image from "next/image";
import { availability } from "@/actions/availability";
import { getOrder } from "@/actions/getorder";
import Lattice from "@/components/latticeGrider";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function SummeryPage({ params }: { params: { id: string } }) {
  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
  const [animation, setAnimation] = useState(false);
  const router = useRouter();

  function translate(x: string) {
    return x
      .replace("bottom", "قائده")
      .replace("top", "راس")
      .replace("height", "ارتفاع")
      .replace("type", "نوع")
      .replace("ribbed", "آجدار")
      .replace("producer", "شرکت تولید کننده")
      .replace("diameter", "قطر");
  }
  const [w, setw] = useState(0);
  const [p, setp] = useState(0);
  const [type, setType] = useState(0);
  const [array, setArray] = useState({});
  useEffect(() => {
    getOrder([{ _id: params.id }, {}]).then((data) => {
      setw(data[0].weight);
      setType(data[0].type);
      setArray(data[0].productInfo);
      setp(data[0].weight * data[0].price);
    });
  }, []);
  return (
    <>
      {Object.keys(array).length != 0 && (
        <div
          className={`relative ${animation && "animate-fade-out-left opacity-0"} grid animate-fade-in-left items-center md:grid-cols-2`}
        >
          <div className="p-10">
            {type === 1 && <Lattice />}
            {type === 2 && (
              <Image
                className="aspect-square rotate-45"
                src={"/hcoil.png"}
                height={1500}
                width={1500}
                alt={""}
              ></Image>
            )}
            {type === 3 && (
              <Image
                className="aspect-square rotate-6"
                src={"/coil.png"}
                height={1500}
                width={1500}
                alt={""}
              ></Image>
            )}
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl bg-background p-6 shadow-md md:order-first">
            <Image
              className="drop-shadow-md"
              width={100}
              height={100}
              src={"/image.png"}
              alt={""}
            ></Image>
            <h1 className="text-xl font-bold">سفارش شما ثبت شد</h1>
            <span>
              <span className="font-bold text-foreground">مقدار سفارش:</span>{" "}
              {w.toLocaleString()} کیلوگرم
            </span>
            <span className="flex flex-col">
              <span className="font-bold text-foreground">مشخصات سفارش:</span>
              {Object.entries(array).map(([key, value]: any) => (
                <span key={key} className="mr-4 flex w-fit gap-2">
                  <span className="font-bold text-foreground">
                    {translate(key)}:
                  </span>
                  <span>
                    {value
                      .toLocaleString()
                      .replace("false", "ساده")
                      .replace("true", "آجدار")}
                  </span>
                </span>
              ))}
            </span>
            <span>
              <span className="font-bold text-foreground">قیمت کل:</span>{" "}
              {p.toLocaleString()} تومان
            </span>
            <span>منتظر تماس کارشناسان ما باشید</span>
            <Button
              onClick={async () => {
                setAnimation(true);
                await sleep(500);
                router.push("/home/products");
              }}
              className="w-full font-bold"
            >
              بازگشت به محصولات
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
