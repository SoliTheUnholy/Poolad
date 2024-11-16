"use client";
import Lattice from "@/components/latticeGrider";
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
  height: z.number({
    required_error: "ارتفاع را انتخاب کنید",
  }),
  top: z.number({
    required_error: "قطر راس را انتخاب کنید",
  }),
  bottom: z.number({
    required_error: "قطر قائده را انتخاب کنید",
  }),
});

export default function LatticeForm() {
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
  const [availableHeights, setH] = useState<number[]>([]);
  const [availableTops, setT] = useState<number[]>([]);
  const [availableBottoms, setB] = useState<number[]>([]);
  useEffect(() => {});
  const discount = () => {
    if (weight < 2000) {
      return 0;
    } else if (weight < 10000) {
      return 100 * weight;
    } else {
      return 2 * 100 * weight;
    }
  };
  const products = async () => {
    const { height, top, bottom } = form.getValues();
    availability(1, [{ height, top, bottom }, {}]).then((data: any) => {
      setH([]);
      setT([]);
      setB([]);
      data.map((pro: any) => {
        setH((prev) => [...prev, pro.height]);
        setT((prev) => [...prev, pro.top]);
        setB((prev) => [...prev, pro.bottom]);
      });
      if (Object.keys(data).length == 1) {
        form.setValue("height", data[0].height);
        form.setValue("top", data[0].top);
        form.setValue("bottom", data[0].bottom);
        setPrice(data[0].price);
        setid(data[0]._id);
      } else {
        setPrice(0);
      }
    });
  };
  const height = [
    { label: "پله", value: "15" },
    { label: "20", value: "20" },
    { label: "25", value: "25" },
    { label: "30", value: "30" },
    { label: "35", value: "35" },
  ] as const;

  const top = [
    { label: "8", value: "8" },
    { label: "10", value: "10" },
    { label: "12", value: "12" },
  ] as const;

  const bottom = [
    { label: "8", value: "8" },
    { label: "10", value: "10" },
    { label: "12", value: "12" },
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
          type: 1,
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
        <Lattice />
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
              name="height"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>ارتفاع</FormLabel>
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
                            ? height.find(
                                (height: any) =>
                                  Number(height.value) === field.value,
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
                            {height.map((height: any) => (
                              <CommandItem
                                disabled={
                                  availableHeights.includes(
                                    Number(height.value),
                                  )
                                    ? false
                                    : true
                                }
                                value={height.label}
                                key={height.value}
                                onSelect={() => {
                                  form.setValue("height", Number(height.value));
                                }}
                              >
                                {height.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    Number(height.value) === field.value
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
                  <FormDescription>ارتفاع خرپا</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <FormField
              control={form.control}
              name="top"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>قطر میله راس</FormLabel>
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
                            ? top.find(
                                (top) => Number(top.value) === field.value,
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
                            {top.map((top) => (
                              <CommandItem
                                disabled={
                                  availableTops.includes(Number(top.value))
                                    ? false
                                    : true
                                }
                                value={top.label}
                                key={top.value}
                                onSelect={() => {
                                  form.setValue("top", Number(top.value));
                                }}
                              >
                                {top.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    Number(top.value) === field.value
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
                  <FormDescription>قطر میله بالا خرپا </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <FormField
              control={form.control}
              name="bottom"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>قطر میله های قائده</FormLabel>
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
                            ? bottom.find(
                                (bottom) =>
                                  Number(bottom.value) === field.value,
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
                            {bottom.map((bottom) => (
                              <CommandItem
                                disabled={
                                  availableBottoms.includes(
                                    Number(bottom.value),
                                  )
                                    ? false
                                    : true
                                }
                                value={bottom.label}
                                key={bottom.value}
                                onSelect={() => {
                                  form.setValue("bottom", Number(bottom.value));
                                }}
                              >
                                {bottom.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    Number(bottom.value) === field.value
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
                  <FormDescription>قطر میله های پایین خرپا </FormDescription>
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
              <FormLabel>
                {(weight * price - discount()).toLocaleString()}
              </FormLabel>
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
