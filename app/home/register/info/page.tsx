"use client";
import { updateUserInfo } from "@/actions/updateInfo";
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
import { useRef, useState } from "react";

export default function Info() {
  const [error, setError] = useState<string>();
  const ref = useRef<HTMLFormElement>(null);
  const session = useSession();
  const router = useRouter();

  
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
      return router.push("/home");
    }
  };
  return (
    <div className="relative flex h-[93vh] w-screen items-center justify-center overflow-hidden">
      <Tabs dir="rtl" defaultValue="company" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="company">شرکتی</TabsTrigger>
          <TabsTrigger value="personal">شخصی</TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <Card className="border-none bg-muted">
            <form ref={ref} action={handleSubmit}>
              {error && (
                <div className="text-center text-sm font-medium text-red-500">
                  {error}
                </div>
              )}
              <CardHeader>
                <CardTitle>مشخصات شخصی</CardTitle>
                <CardDescription>
                  مشخصات خود را جهت تکمیل ثبت نام وارد کنید.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">نام و نام خانوادگی</Label>
                  <Input id="name" name="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="code">کد ملی</Label>
                  <Input id="code" name="code" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">نشانی</Label>
                  <Input id="address" name="address" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="zipCode">کد پستی</Label>
                  <Input id="zipCode" name="zipCode" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">ثبت مشخصات</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="company">
          <Card className="border-none bg-muted">
            <form ref={ref} action={handleSubmit}>
              {error && (
                <div className="text-center text-sm font-medium text-red-500">
                  {error}
                </div>
              )}
              <CardHeader>
                <CardTitle>مشخصات شرکتی</CardTitle>
                <CardDescription>
                  مشخصات شرکت را جهت تکمیل ثبت نام وارد کنید.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">نام شرکت</Label>
                  <Input id="name" name="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="code">کد شرکت</Label>
                  <Input id="code" name="code" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">نشانی</Label>
                  <Input id="address" name="address" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="zipCode">کد پستی</Label>
                  <Input id="zipCode" name="zipCode" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">ثبت مشخصات</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
