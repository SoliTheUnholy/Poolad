"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { ArrowLeftIcon, ArrowRightIcon, Weight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { availability } from "@/actions/availability";
import { neworder } from "@/actions/order";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const FormSchema = z.object({
  diameter: z.number({
    required_error: "قطر را انتخاب کنید",
  }),
  ribbed: z.boolean({
    required_error: " آجدار بودن را انتخاب کنید",
  }),
  type: z.string({
    required_error: "نوع کلاف را انتخاب کنید",
  }),
  producer: z.string({
    required_error: "تولید کننده را وارد کنید",
  }),
});

export default function CoilForm() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status !== "authenticated") {
      toast.info("ابتدا وارد حساب کاربری خود شوید.");
      router.push("/home/login");
    }
  }, [router, session.status]);
  const [animation, setAnimation] = useState(false);
  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
  const [weight, setW] = useState(0);
  const [id, setid] = useState("");
  const [price, setPrice] = useState(0);
  const [availableDiams, setD] = useState<number[]>([]);
  const [availableTypes, setT] = useState<string[]>([]);
  const [availableProducers, setP] = useState<string[]>([]);
  const [availableRib, setR] = useState<boolean[]>([]);
  const products = async () => {
    const { diameter, ribbed, type, producer } = form.getValues();
    availability(2, [{ diameter, ribbed, type, producer }, {}]).then(
      (data: any) => {
        setD([]);
        setT([]);
        setP([]);
        setR([]);
        data.map((pro: any) => {
          setD((prev) => [...prev, pro.diameter]);
          setT((prev) => [...prev, pro.type]);
          setP((prev) => [...prev, pro.producer]);
          setR((prev) => [...prev, pro.ribbed]);
        });
        if (Object.keys(data).length == 1) {
          form.setValue("diameter", data[0].diameter);
          form.setValue("type", data[0].type);
          form.setValue("producer", data[0].producer);
          form.setValue("ribbed", data[0].ribbed);
          setPrice(data[0].price);
          setid(data[0]._id);
        } else {
          setPrice(0);
        }
      },
    );
  };

  const producer = [
    { label: "گلستان", value: "گلستان" },
    { label: "یزد", value: "یزد" },
    { label: "کرمان", value: "کرمان" },
    { label: "شیراز", value: "شیراز" },
  ] as const;

  const diameter = [
    { label: "5.5", value: "5.5" },
    { label: "6.5", value: "6.5" },
    { label: "8", value: "8" },
    { label: "10", value: "10" },
    { label: "12", value: "12" },
  ] as const;

  const ribbed = [
    { label: "آجدار", value: true },
    { label: "ساده", value: false },
  ] as const;

  const type = [
    { label: "AII", value: "AII" },
    { label: "AIII", value: "AIII" },
    { label: "3SP", value: "3SP" },
    { label: "RST", value: "RST" },
    { label: "1008", value: "1008" },
    { label: "1006", value: "1006" },
  ] as const;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const r = new Promise((resolve) =>
      resolve(
        neworder({
          userId: session.data?.user.id,
          productId: id,
          weight,
          type: 2,
        }).then(async (data) => {
          setAnimation(true);
          await sleep(500);
          router.push(`/home/products/summery/${data._id}`);
        }),
      ),
    );
    toast.promise(r, {
      loading: "در حال ثبت ...",
      success: () => {
        return "سفارش ثبت شد";
      },
      error: "ناموفق",
    });
  }
  return (
    <div
      className={`${animation && "animate-fade-out-left opacity-0"} relative grid min-h-[85svh] w-full animate-fade-in-left p-8 md:grid-cols-2`}
    >
      <Button
        onClick={async () => {
          setAnimation(true);
          await sleep(500);
          router.push(`/home/products/`);
        }}
        className="absolute bottom-8 left-8 w-min"
      >
        <ArrowLeftIcon />
        محصولات
      </Button>
      <div className="md:order-1">
        <Image
          className="aspect-square rotate-45"
          src={"/hcoil.png"}
          height={1500}
          width={1500}
          alt={""}
        ></Image>
      </div>
      <div className="">
        <Form {...form}>
          <form
            onFocus={() => products()}
            onSubmit={form.handleSubmit(onSubmit)}
            className={`flex min-h-[85svh] w-full flex-col justify-between gap-4`}
          >
            <Separator className="block md:hidden" />
            <FormField
              control={form.control}
              name="diameter"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>قطر</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild disabled={price !== 0}>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? diameter.find(
                                (diameter: any) =>
                                  Number(diameter.value) === field.value,
                              )?.label
                            : "انتخاب کنید"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="جستجو" className="h-9" />
                        <CommandList>
                          <CommandEmpty>محصول موجود نیست</CommandEmpty>
                          <CommandGroup>
                            {diameter.map((diameter: any) => (
                              <CommandItem
                                disabled={
                                  availableDiams.includes(
                                    Number(diameter.value),
                                  )
                                    ? false
                                    : true
                                }
                                value={diameter.label}
                                key={diameter.value}
                                onSelect={() => {
                                  form.setValue(
                                    "diameter",
                                    Number(diameter.value),
                                  );
                                }}
                              >
                                {diameter.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    Number(diameter.value) === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>قطر کلاف</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>نوع</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild disabled={price !== 0}>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? type.find((type) => type.value === field.value)
                                ?.label
                            : "انتخاب کنید"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="جستجو" className="h-9" />
                        <CommandList>
                          <CommandEmpty>محصول موجود نیست</CommandEmpty>
                          <CommandGroup>
                            {type.map((type) => (
                              <CommandItem
                                disabled={
                                  availableTypes.includes(type.value)
                                    ? false
                                    : true
                                }
                                value={type.label}
                                key={type.value}
                                onSelect={() => {
                                  form.setValue("type", type.value);
                                }}
                              >
                                {type.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    type.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription> نوع کلاف </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <Separator />
            <FormField
              control={form.control}
              name="ribbed"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>آجدار</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild disabled={price !== 0}>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value === true || field.value === false
                            ? ribbed.find((ribbed) => ribbed.value === field.value)
                                ?.label
                            : "انتخاب کنید"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="جستجو" className="h-9" />
                        <CommandList>
                          <CommandEmpty>محصول موجود نیست</CommandEmpty>
                          <CommandGroup>
                            {ribbed.map((ribbed) => (
                              <CommandItem
                                disabled={
                                  availableRib.includes(Boolean(ribbed.value))
                                    ? false
                                    : true
                                }
                                value={ribbed.label}
                                key={String(ribbed.value)}
                                onSelect={() => {
                                  form.setValue(
                                    "ribbed",
                                    Boolean(ribbed.value),
                                  );
                                }}
                              >
                                {ribbed.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    Boolean(ribbed.value) === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>آجدار بودن کلاف</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <FormField
              control={form.control}
              name="producer"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>تولید کننده</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild disabled={price !== 0}>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? producer.find(
                                (producer) => producer.value === field.value,
                              )?.label
                            : "انتخاب کنید"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="جستجو" className="h-9" />
                        <CommandList>
                          <CommandEmpty>محصول موجود نیست</CommandEmpty>
                          <CommandGroup>
                            {producer.map((producer) => (
                              <CommandItem
                                disabled={
                                  availableProducers.includes(producer.value)
                                    ? false
                                    : true
                                }
                                value={producer.label}
                                key={producer.value}
                                onSelect={() => {
                                  form.setValue("producer", producer.value);
                                }}
                              >
                                {producer.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    producer.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>تولید کننده را انتخاب کنید</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <FormItem>
              <FormLabel>مقدار</FormLabel>
              <FormControl>
                <Input
                  disabled={price === 0}
                  onInput={(e) => setW(Number(e.currentTarget.value))}
                  onChangeCapture={(e) => {
                    setW(Number(e.currentTarget.value));
                  }}
                  onKeyUp={(e) => {
                    setW(Number(e.currentTarget.value));
                  }}
                  type="number"
                />
              </FormControl>
              <FormDescription>مقدار مورد نظر (کیلوگرم) </FormDescription>
              <FormMessage />
            </FormItem>
            <Separator />
            <FormItem>
              <FormLabel>{(weight * price).toLocaleString()}</FormLabel>
              <FormDescription>قیمت محاسبه شده (تومان)</FormDescription>
              <FormMessage />
            </FormItem>
            <Button type="submit" className="mt-auto w-min">
              <ArrowRightIcon />
              فاکتور
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
