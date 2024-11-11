"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function AutoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000 }),
  );

  return (
    <Carousel plugins={[plugin.current]} className="h-screen w-full">
      <CarouselContent>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-1.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-4.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-7.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-9.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-10.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-11.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-12.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-13.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-15.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-16.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-17.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-18.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-20.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-23.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-27.jpg"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
            src={"/Pic-31.jpg"}
            alt={""}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
