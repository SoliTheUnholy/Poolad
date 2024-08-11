import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, CreditCard, DollarSign, Wallet } from "lucide-react";
export default function Dashboard() {
  const balance = "37,000,000";
  const credit = "20,000,000";
  return (
    <>
      <div className="grid h-min grid-rows-1 gap-4 md:grid-cols-3">
        <Card className="row-span-1 flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">موجودی ها</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              فعلی: {balance} تومان
              <br />
              اعتبار: {credit} تومان
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              تاریخچه <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-1 flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">شارژ کیف پول</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              با شارژ حساب می توانید بدهی قبلی خود را به راحتی پرداخت نمایید
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              پرداخت
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-1 flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">مدیریت فایلها</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              فایلهای پرتکرار خود را ذخیر کنید و از هرجا و هرزمان که تمایل
              داشتید سفارش خود را ثبت کنید
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              ورود
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-1 flex flex-col justify-between bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ثبت سفارش چاپ</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              illum ea voluptatum harum recusandae, dolorum provident quos enim
              cumque id porro architecto perferendis vitae eum cupiditate iusto
              nihil libero. Itaque commodi ex vero! Illum quibusdam adipisci
              totam nobis recusandae accusamus?{" "}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              ورود
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-1 flex flex-col justify-between bg-gradient-to-r from-sky-500/20 to-indigo-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              پنل ویژه ناشرین{" "}
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quo dolore modi consequatur doloremque exercitationem placeat
              nulla? Doloremque praesentium commodi, odit et consequatur
              blanditiis officia. Aspernatur eius corporis sapiente! Eligendi
              labore nostrum fuga eius aliquam et tempore aliquid nesciunt?
              Quisquam.{" "}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              ورود
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-1 flex flex-col justify-between bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">وضعیت سفارشات</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              neque accusantium, sint quisquam voluptates ex inventore tempora
              adipisci necessitatibus id optio eligendi illum, magnam,
              laboriosam error enim dicta impedit! Pariatur delectus labore
              ducimus, perferendis praesentium consequatur eos distinctio. Ut,
              quia.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              جزئیات
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>{" "}
        <Card className="row-span-1 flex flex-col justify-between bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">امتیازت من </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              eveniet provident fugiat culpa libero cum accusantium fuga!
              Necessitatibus, in ex!
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              رویداد ها
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-2 row-span-1 flex flex-col justify-between bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">امتیازت من </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              eveniet provident fugiat culpa libero cum accusantium fuga!
              Necessitatibus, in ex!
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              رویداد ها
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
