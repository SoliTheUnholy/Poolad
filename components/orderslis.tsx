"use client";
import { getOrder } from "@/actions/getorder";
import { Card } from "./ui/card";
import Lattice from "./latticeGrider";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function OrdersList() {
  const [orders, setOrders] = useState<any>([]);
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
  useEffect(() => {
    getOrder([{}, {}]).then((result) =>
      result.map(async (data: any) => {
        setOrders((orders: any) => [
          ...orders,
          <Card
            key={data._id}
            className={`relative flex animate-fade-in-left flex-col items-center bg-muted`}
          >
            <div className="w-full p-4">
              {data.type === 1 && (
                <div className="grid">
                  <span className="text-lg font-bold">خرپا</span>
                  <Lattice />
                </div>
              )}
              {data.type === 2 && (
                <div className="grid">
                  <span className="text-lg font-bold">کلاف</span>
                  <Image
                    className="aspect-square rotate-45"
                    src={"/hcoil.png"}
                    height={1500}
                    width={1500}
                    alt={""}
                  ></Image>
                </div>
              )}
              {data.type === 3 && (
                <div className="grid">
                  <span className="text-lg font-bold">کلاف کشیده</span>
                  <Image
                    className="aspect-square rotate-6"
                    src={"/coil.png"}
                    height={1500}
                    width={1500}
                    alt={""}
                  ></Image>
                </div>
              )}
            </div>
            <div className="flex w-full grow flex-col gap-4 rounded-xl bg-background p-6 shadow-md">
              <span>
                <span className="font-bold text-foreground">مقدار سفارش:</span>
                {data.weight} کیلوگرم
              </span>
              <span className="flex flex-col">
                <span className="font-bold text-foreground">مشخصات سفارش:</span>
                {Object.entries(data.productInfo).map(([key, value]: any) => (
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
                <span className="font-bold text-foreground">قیمت کل:</span>
                {data.price * data.weight} تومان
              </span>
            </div>
          </Card>,
        ]);
      }),
    );
  }, []);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {orders ? orders.map((res: any) => res) : ""}
    </div>
  );
}
