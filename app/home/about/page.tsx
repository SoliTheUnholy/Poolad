import { AutoCarousel } from "@/components/autoCarousel";
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
      <div className="grid lg:h-[90vh] lg:grid-cols-2">
        <Card className="z-10 min-w-72 flex flex-col justify-between border-none bg-muted shadow-2xl">
          <CardHeader>
            <CardTitle className=" text-5xl font-bold">
              درباره ما
            </CardTitle>
          </CardHeader>
          <CardContent className="text-justify">
            شركت تعاوني پولاد سقف خليج فارس در سال 1382 با سرمايه گذاري بخش
            خصوصى و استفاده ازتسهيلات بانكى تاًسيس وبه بهره بردارى رسيده. انگيزه
            احداث اين كارخانه توليد خرپاى ميلگردى سرد نورديده، گرم نورديده وكشش
            مفتول جهت مصرف در ساخت بناهاى استاندارد ومقاوم در برابر حوادث پيش
            بينى نشده وزلزله طبق مقررات ملى ساختمان والزام آن مى باشد،كه اين
            خودموجب عدم استفاده از خرپا و تيرچه هاى دست ساز وغير استاندارد در
            ساختمانهاى بلند مرتبه ومنازل مسكونى مى شود. اين تعاوني با به كار
            گماردن مهندسين وكارگران حرفه اى و دوره ديده كه خود در فرآيند اشتغال
            سهم مهمى دارا مى باشند، كار خود را آغاز نمود. تعاونى پولادسقف در
            شهرك بزرگ صنعتى شيراز خيابان 103 احداث گرديده با مساحت تقريبى پانزده
            هزار مترمربع وبا زير بناى چهارهزاروپانصدمتر مربع متشكل از سالنهاى
            توليد،انبار وبناهاى ادارى. ماشين آلات نصب شده در اين تعاونى از
            بهترين ماشين آلات تمام اتوماتيك روز اروپايى است با ظرفيت توليد
            ساليانه حدود 50000 تن خرپاى ميلگردى و30000 تن ميلگرد سرد نورديده مى
            باشد. اين كارخانه داراى گواهينامه استاندارد iso 9001:2008 درسيستم
            مديريت كيفيت و گواهينامه استاندارد ملى ايران به شماره هاى 11558 -
            2909 مى باشد.
          </CardContent>
          <CardFooter className=""></CardFooter>
        </Card>
        <Card className="-mt-4 overflow-hidden rounded-xl border-none object-cover lg:-mr-4 lg:mt-0">
          <AutoCarousel />
        </Card>
      </div>
    </Container>
  );
}
