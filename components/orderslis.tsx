"use client";
import { getOrder } from "@/actions/getorder";
import { Card } from "@/components/ui/card";
import { userInfo } from "@/actions/userInfo";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateOrder } from "@/actions/updateOrder";
export default function OrdersList() {
  const router = useRouter();
  const { data, status } = useSession();
  if (data?.user.role === "user") {
    router.push("/dashboard/orderslist");
  }
  const discount = (weight: number, type: number) => {
    if (type === 1) {
      if (weight < 2000) {
        return 0;
      } else if (weight < 10000) {
        return 100 * weight;
      } else {
        return 2 * 100 * weight;
      }
    }
    return 0;
  };
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
    if (status === "authenticated") {
      getOrder([{}, {}]).then((res) => {
        if (res) {
          res.map((data: any) => {
            userInfo([{ _id: data.userId }, {}]).then((user) => {
              if (user[0]) {
                setOrders((orders: any) => [
                  ...orders,
                  <Card
                    key={data._id}
                    className={`relative bg-green-500 ${data.status === "rejected" && "bg-red-500"} ${data.status === "pending" && "bg-primary"} flex animate-fade-in-left flex-col items-center`}
                  >
                    <div className="w-full p-4">
                      {data.type === 1 && (
                        <div className="grid">
                          <span className="text-lg font-bold">خرپا</span>
                          {/* <Lattice /> */}
                        </div>
                      )}
                      {data.type === 2 && (
                        <div className="grid">
                          <span className="text-lg font-bold">کلاف</span>
                          {/* <Image
                        className="aspect-square rotate-45"
                        src={"/hcoil.png"}
                        height={1500}
                        width={1500}
                        alt={""}
                      ></Image> */}
                        </div>
                      )}
                      {data.type === 3 && (
                        <div className="grid">
                          <span className="text-lg font-bold">کلاف کشیده</span>
                          {/* <Image
                        className="aspect-square rotate-6"
                        src={"/coil.png"}
                        height={1500}
                        width={1500}
                        alt={""}
                      ></Image> */}
                        </div>
                      )}
                    </div>
                    <div className="flex w-full grow flex-col gap-4 rounded-xl bg-background p-6 shadow-md">
                      <span>
                        <span className="font-bold text-foreground">
                          مشخصات کاربر:
                        </span>
                        <span className="mr-4 flex w-fit gap-2">
                          <span className="font-bold text-foreground">
                            نام:
                          </span>
                          <span>{user[0].name}</span>
                        </span>
                        <span className="mr-4 flex w-fit gap-2">
                          <span className="font-bold text-foreground">
                            شماره تماس:
                          </span>
                          <a href={`tel:${user[0].number}`}>{user[0].number}</a>
                        </span>
                        <span className="mr-4 flex w-fit gap-2">
                          <span className="font-bold text-foreground">
                            آدرس:
                          </span>
                          <span>{user[0].address}</span>
                        </span>
                      </span>
                      <span>
                        <span className="font-bold text-foreground">
                          مقدار سفارش:
                        </span>
                        {data.weight} کیلوگرم
                      </span>
                      <span className="flex flex-col">
                        <span className="font-bold text-foreground">
                          مشخصات سفارش:
                        </span>
                        {Object.entries(data.productInfo).map(
                          ([key, value]: any) => (
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
                          ),
                        )}
                      </span>
                      <span>
                        <span className="font-bold text-foreground">
                          قیمت کل:
                        </span>
                        {data.price * data.weight -
                          discount(data.weight, data.type)}
                        تومان
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          onClick={() => {
                            updateOrder({ id: data._id, status: "resolved" });
                            location.reload();
                          }}
                          className="bg-green-500 font-bold"
                        >
                          تایید
                        </Button>
                        <Button
                          onClick={() => {
                            updateOrder({ id: data._id, status: "pending" });
                            location.reload();
                          }}
                          className="bg-primary font-bold"
                        >
                          تعلیق
                        </Button>
                        <Button
                          onClick={() => {
                            updateOrder({ id: data._id, status: "rejected" });
                            location.reload();
                          }}
                          className="bg-red-500 font-bold"
                        >
                          لغو
                        </Button>
                      </div>
                    </div>
                  </Card>,
                ]);
              }
            });
          });
        }
      });
    }
  }, [status]);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((res: any) => res)}
      </div>
    </>
  );
}
