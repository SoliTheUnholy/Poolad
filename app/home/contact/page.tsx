import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function ContactPage() {
  return (
    <Container>
      <Card className="shadow-2xl">
        <CardHeader>
          <CardTitle className="text-5xl font-bold">ارتباط با ما</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5">
          <section className="flex gap-2">
            <h5 className="font-bold">آدرس:</h5>
            <section className="flex flex-col">
              <a
                target="_blank"
                className="hover:text-primary"
                href="https://maps.google.com/?q=29.478706374677504,52.54372870296799"
              >
                شیراز، شهرک صنعتی بزرگ شیراز، بلوار صنعت جنوبی، خیابان 101، فرعی
                103
              </a>
              <a
                className="hover:text-primary"
                target="_blank"
                href="https://www.google.com/maps?saddr=My+Location&daddr=29.478706374677504,52.54372870296799"
              >
                مسیریابی
              </a>
            </section>
          </section>
          <section className="flex gap-2">
            <h5 className="font-bold">شماره تماس:</h5>
            <section className="flex flex-col">
              <a
                target="_blank"
                className="hover:text-primary"
                href="tel:07191099114"
              >
                07191099114
              </a>
              <p>
                داخلی های فروش 115-117-119 <br />
                داخلی های حسابداری 105-106-107-108
              </p>
            </section>
          </section>
          <section className="flex gap-2">
            <h5 className="font-bold">شماره موبایل:</h5>
            <section className="flex flex-col">
              <a
                target="_blank"
                className="hover:text-primary"
                href="tel:09171179114"
              >
                09171179114
              </a>
              <a
                target="_blank"
                className="hover:text-primary"
                href="tel:09171176489"
              >
                09171176489
              </a>
              <a
                target="_blank"
                className="hover:text-primary"
                href="tel:09171179114"
              >
                09101179114
              </a>
            </section>
          </section>
          <section className="flex gap-2">
            <h5 className="font-bold">ایمیل: </h5>
            <a
              target="_blank"
              className="hover:text-primary"
              href="mailto:poolad.saghf@yahoo.com"
            >
              poolad.saghf@yahoo.com
            </a>
          </section>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <a
            target="_blank"
            className="hover:text-primary"
            href="https://wa.me/+989101179114"
          >
            <Button className="bg-gradient-to-br from-green-500 to-slate-500 text-white">
              واتسپ
            </Button>
          </a>
          <a
            target="_blank"
            className="hover:text-primary"
            href="https://t.me/PooladSaghf_TPS"
          >
            <Button className="bg-gradient-to-br from-slate-500 to-blue-500 text-white">
              تلگرام
            </Button>
          </a>
          <a
            target="_blank"
            className="hover:text-primary"
            href="https://instagram.com/pooladsaghfcoop"
          >
            <Button className="bg-gradient-to-br from-yellow-500 to-red-500 text-white">
              اینستاگرام
            </Button>
          </a>
          <a
            target="_blank"
            className="hover:text-primary"
            href="https://splus.ir/Pooladsaghf"
          >
            <Button className="bg-gradient-to-br from-sky-500 to-blue-500 text-white">
              سروش
            </Button>
          </a>
          <a
            target="_blank"
            className="hover:text-primary"
            href="https://rubika.ir/Pooladsaghf"
          >
            <Button className="bg-gradient-to-br from-purple-500 to-red-500 text-white">
              روبیکا
            </Button>
          </a>
        </CardFooter>
      </Card>
    </Container>
  );
}
