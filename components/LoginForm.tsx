"use client";
import { FormEvent, useState } from "react";

import Link from "next/link";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      number: formData.get("number"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };
  return (
    <Card className="w-[90vw] bg-muted border-none max-w-fit">
      <CardHeader>
        <CardTitle className="text-xl">ورود به حساب</CardTitle>
        <CardDescription>
          شماره تلفن و رمز ورود خود را وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="grid w-80 gap-4">
            {error && (
              <div className="text-center text-sm font-medium text-red-500">
                {error}
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="number">شماره تلفن</Label>
              <Input
                name="number"
                type="number"
                placeholder="09012345678"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <Label htmlFor="password">رمز</Label>
                <Link href="/forgot-password" className="text-sm underline">
                  رمز خود را فراموش کرده اید؟
                </Link>
              </div>
              <Input name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              ورود
            </Button>
            <Button variant="outline" className="w-full">
              ورود با رمز یکبار مصرف
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="grid">
        <div className="text-center text-sm">
          حساب کاربری ندارید ؟
          <Link href="/home/register" className="mr-1 text-primary underline">
            ثبت نام
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
