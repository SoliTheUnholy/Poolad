"use client";
import { removeUser } from "@/actions/removeUser";
import { setRole } from "@/actions/setRole";
import { userInfo } from "@/actions/userInfo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const userslist = () => {
  const { data, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (data?.user.role === "user" || data?.user.role === "employee") {
      router.push("/dashboard/orderslist");
    }
  }, [status]);
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    userInfo([{}, {}]).then((res) => {
      res.map((data: any) => {
        console.log(data);
        setUsers((prev: any) => [
          ...prev,
          <Card
            className={`${data.role === "employee" && "bg-blue-200"} ${data.role === "admin" && "bg-green-200"}`}
          >
            <CardHeader>
              <CardTitle>{data.name}</CardTitle>
              <CardDescription>
                <a href={`tel:${data.number}`}>{data.number}</a>
              </CardDescription>
              <CardContent className="grid">
                <span>
                  <span className="font-bold">آدرس: </span>
                  {data.address}
                </span>
                <span>
                  <span className="font-bold">کدملی/کدشرکت: </span>
                  {data.code}
                </span>
                <span>
                  <span className="font-bold">دسترسی: </span>
                  {data.role}
                </span>
              </CardContent>
              <CardFooter className="grid grid-cols-3 gap-2">
                <Button
                  onClick={() => {
                    setRole({ id: data._id, role: "admin" });
                    location.reload();
                  }}
                  className="bg-green-500 font-bold"
                >
                  ادمین
                </Button>
                <Button
                  onClick={() => {
                    setRole({ id: data._id, role: "employee" });
                    location.reload();
                  }}
                  className="bg-blue-500 font-bold"
                >
                  کارمند
                </Button>
                <Button
                  onClick={() => {
                    setRole({ id: data._id, role: "user" });
                    location.reload();
                  }}
                  className="bg-primary font-bold"
                >
                  کاربر
                </Button>
                <Button
                  onClick={() => {
                    removeUser(data._id);
                    location.reload();
                  }}
                  className="col-span-3 bg-red-500 font-bold"
                >
                  حذف
                </Button>
              </CardFooter>
            </CardHeader>
          </Card>,
        ]);
      });
    });
  }, []);
  return <div className="grid gap-2 sm:grid-cols-2">{users}</div>;
};

export default userslist;
