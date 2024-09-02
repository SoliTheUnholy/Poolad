import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Lattice from "@/components/latticeGrider";
import Container from "@/components/container";
export default function ProductsPage() {
  return (
    <Container>
      <Card className="mx-auto grid bg-background p-6 md:grid-cols-3">
        <Card className="relative grid scale-95 grid-rows-6 overflow-hidden bg-cover shadow-md brightness-90 duration-500 hover:z-10 hover:scale-110 hover:shadow-xl [&_img]:transition-all [&_img]:duration-500 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110 [&_img]:hover:brightness-150">
          <CardHeader className="">
            <CardTitle className="text-4xl text-foreground">خرپا</CardTitle>
          </CardHeader>
          <CardContent className="row-span-4 flex items-center">
            <Lattice />
          </CardContent>
          <CardFooter className=""></CardFooter>
        </Card>
        <Card className="relative grid scale-95 grid-rows-6 overflow-hidden bg-cover shadow-md brightness-90 duration-500 hover:z-10 hover:scale-110 hover:shadow-xl [&_img]:transition-all [&_img]:duration-500 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110 [&_img]:hover:brightness-150">
          <CardHeader className="text-4xl text-foreground">
            <CardTitle className="">کلاف</CardTitle>
          </CardHeader>
          <CardContent className="row-span-4 flex items-center">
            <Image
              className="rotate-45"
              src={"/hcoil.png"}
              height={1500}
              width={1500}
              alt={""}
            ></Image>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="relative grid scale-95 grid-rows-6 overflow-hidden bg-cover shadow-md brightness-90 duration-500 hover:z-10 hover:scale-110 hover:shadow-xl [&_img]:transition-all [&_img]:duration-500 [&_img]:hover:-skew-y-6 [&_img]:hover:skew-x-6 [&_img]:hover:scale-110 [&_img]:hover:brightness-150">
          <CardHeader className="">
            <CardTitle className="text-4xl text-foreground">
              کلاف کشیده
            </CardTitle>
          </CardHeader>
          <CardContent className="row-span-4 flex items-center">
            <Image
              className="rotate-6"
              src={"/coil.png"}
              height={1500}
              width={1500}
              alt={""}
            ></Image>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </Card>
    </Container>
  );
}
