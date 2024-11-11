"use client";
import { updatePassword } from "@/actions/updatePassword";
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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Info() {
  const [error, setError] = useState<string>();
  const ref = useRef<HTMLFormElement>(null);
  const session = useSession();
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    if (formData.get("password") === formData.get("rpassword")) {
      const r = await updatePassword({
        id: session.data?.user.id,
        password: formData.get("password"),
      }).then(() => router.push("./"));
    } else {
      setError("رمز ها تطابق ندارند.");
      return router.refresh();
    }
    ref.current?.reset();
  };
  return (
    <div className="relative flex h-[93vh] w-full items-center justify-center overflow-hidden">
      <Card className="min-w-96 border-none bg-muted">
        <form ref={ref} action={handleSubmit}>
          <CardHeader>
            <CardTitle>مشخصات</CardTitle>
            <CardDescription>رمز خود را تغییر دهید</CardDescription>
          </CardHeader>
          {error && (
            <div className="text-center text-sm font-medium text-red-500">
              {error}
            </div>
          )}
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="password">رمز</Label>
              <Input id="password" name="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="rpassword">تکرار رمز</Label>
              <Input id="rpassword" name="rpassword" />
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
