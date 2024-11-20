"use client";
import { updateUserInfo } from "@/actions/updateInfo";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Info() {
  const [error, setError] = useState<string>();
  const ref = useRef<HTMLFormElement>(null);
  const session = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  useEffect(() => {
    userInfo([{ _id: session.data?.user.id }, {}]).then((data) => {
      setName(data[0].name);
      setCode(data[0].code);
      setAddress(data[0].address);
      setZipCode(data[0].zipCode);
    });
  }, []);
  const handleSubmit = async (formData: FormData) => {
    const r = await updateUserInfo({
      id: session.data?.user.id,
      name: formData.get("name"),
      code: formData.get("code"),
      address: formData.get("address"),
      zipCode: formData.get("zipCode"),
    });
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      return router.push("./");
    }
  };
  return (
    <div className="relative flex h-[93vh] w-full items-center justify-center overflow-hidden">
      <Card className="min-w-80 border-none bg-muted">
        <form ref={ref} action={handleSubmit}>
          {error && (
            <div className="text-center text-sm font-medium text-red-500">
              {error}
            </div>
          )}
          <CardHeader>
            <CardTitle>مشخصات</CardTitle>
            <CardDescription>مشخصات خود را تغییر دهید</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">نام و نام خانوادگی / نام شرکت</Label>
              <Input defaultValue={name} id="name" name="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="code">کد ملی / کد شرکت</Label>
              <Input defaultValue={code} id="code" name="code" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="address">نشانی</Label>
              <Input defaultValue={address} id="address" name="address" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="zipCode">کد پستی</Label>
              <Input defaultValue={zipCode} id="zipCode" name="zipCode" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">ثبت تغییرات</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
