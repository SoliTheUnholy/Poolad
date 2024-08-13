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
        <Card className="row-span-1 flex flex-col justify-between bg-gradient-to-r from-sky-500/20 to-indigo-500/20">
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
              شارژ <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-1 flex flex-col justify-between bg-gradient-to-r from-sky-500/20 to-indigo-500/20">
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
        <Card className="row-span-2 flex flex-col justify-between bg-gradient-to-r from-sky-500/20 to-indigo-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ثبت سفارش چاپ</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              در این بخش میتوانید انواع سفارش چاپس خود را ثبت نمایید.
              <br />
              <br />
              در بخش دیجیتال سفارشات فوری خود از جمله کارت ویزیت، سربرگ، تراکت،
              پاکت نامه و کتابچه های خود را سفارش دهید.
              <br />
              <br />
              در بخش افست سفارشات تیراژ بالای خود را (از جمله کارت ویزیت، تراکت،
              پاکت نامه، دسته فاکتور، و...) را ثبت نمایید و با قیمت بسیار بصرفعه
              آنها را دریافت نمایید.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              ورود
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-2 flex flex-col justify-between bg-gradient-to-r from-sky-500/20 to-indigo-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              پنل ویژه ناشرین
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              این بخش ویژه ناشرین، مولفین، کتاب(ها)/کتابچه(ها)ی خود را به صورت
              مستمر چاپ میکنند می باشد.
              <br />
              <br />
              میتوانید در پنل خود کتابها را آپلود و نگهداری کنید و هر زمان که
              نیاز داشتید به سرعت و با دقت سفارش خود را درخواست دهید.
              <br />
              <br />
              توجه داشته باشید زمان آماده سازی سفارشات ثبت شده در این بخش فقط 3
              روز کاری می باشد.
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
              پنل ویژه کافه رستوران
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              من نمیدونم اینجا چی بنویسم
              <br />
              دیزاین بنظرم اینجوری باشه 
              <br />
              واسم ی جا تایپش کنید <br />
              <br />
              میذارمش
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
            <CardTitle className="text-sm font-medium">وضعیت سفارشات</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col text-sm text-muted-foreground">
            <span className="flex justify-between">
              <span>سفارشات در انتظار تایید:</span>
              <span>0</span>
            </span>
            <span className="flex justify-between">
              <span>سفارت تایید شده:</span>
              <span>0</span>
            </span>
            <span className="flex justify-between">
              <span>سفارشات در فرایند آماده سازی:</span>
              <span>0</span>
            </span>
            <span className="flex justify-between">
              <span>سفارشات آماده شده:</span>
              <span>0</span>
            </span>
            <span className="flex justify-between">
              <span>سفارشات تحویل شده:</span>
              <span>0</span>
            </span>
            <span className="flex justify-between">
              <span>سفارشات کنسل شده:</span>
              <span>0</span>
            </span>
            <span className="flex justify-between">
              <span>سفارشات تعلیق شده:</span>
              <span>0</span>
            </span>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="gap-1 self-end">
              جزئیات <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="row-span-1 flex flex-col justify-between bg-gradient-to-r from-sky-500/20 to-indigo-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">امتیازت من </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <span className="flex justify-between">
              <span>کل امتیازات:</span>
              <span>23000</span>
            </span>
            <p className="text-sm text-muted-foreground">
              متناسب با خرید های آنلاین تعدادی امتیاز
              <br />
              بدست می آورید. با این امتیازات، میتوانید
              <br />
              از تخفیف ها ، هدایا و ... استفاده کنید.
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
