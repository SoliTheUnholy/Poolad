"use client";
import { useRef, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { register } from "@/actions/register";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    if (formData.get("password") !== formData.get("rpassword")) {
      setError("Passwords don't match");
      return;
    }
    const r = await register({
      number: formData.get("number"),
      password: formData.get("password"),
    });
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      const res = await signIn("credentials", {
        number: formData.get("number"),
        password: formData.get("password"),
        redirect: false,
      });
      return router.push("/home/register/info");
    }
  };
  return (
    <Card className="absolute z-10 w-[90vw] max-w-fit border-none bg-muted">
      <CardHeader>
        <CardTitle className="text-xl">ساخت حساب کاربری</CardTitle>
        <CardDescription>
          اطلاعات خود را جهت ساخت حساب وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 sm:w-80" ref={ref} action={handleSubmit}>
          {error && (
            <div className="text-center text-sm font-medium text-red-500">
              {error}
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="number">شماره تلفن</Label>
            <Input
              name="number"
              id="number"
              type="number"
              placeholder="09012345678"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">رمز</Label>
            <Input name="password" id="password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rpassword">تکرار رمز</Label>
            <Input name="rpassword" id="rpassword" type="password" />
          </div>
          <Button type="submit" className="w-full">
            ساخت حساب کاربری
          </Button>
          <Button variant="outline" className="w-full">
            ورود با رمز یکبار مصرف
          </Button>
        </form>
      </CardContent>
      <CardFooter className="grid">
        <div className="text-center text-sm">
          حساب کاربری دارید ؟
          <Link href="/home/login" className="mr-1 text-primary underline">
            ورود
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
