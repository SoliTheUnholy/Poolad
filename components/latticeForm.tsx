"use client";
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
import { ArrowRightIcon, Weight } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import { availability } from "@/actions/availability";

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
  weight: z.number({
    required_error: "مقدار را وارد کنید",
  }),
  price: z.number({
    required_error: "مقدار را وارد کنید",
  }),
});

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

export function LatticeForm() {
  const [weight, setW] = useState(0);
  const [price, setPrice] = useState(0);
  const [availableHeights, setH] = useState<number[]>([]);
  const [availableTops, setT] = useState<number[]>([]);
  const [availableBottoms, setB] = useState<number[]>([]);
  const products = async () => {
    availability(1, [{ ...form.getValues() }, {}]).then((data: any) => {
      setH([]);
      setT([]);
      setB([]);
      data.map((pro: any) => {
        setH((prev) => [...prev, pro.height]);
        setT((prev) => [...prev, pro.top]);
        setB((prev) => [...prev, pro.bottom]);
      });
      if (Object.keys(data).length == 1) {
        setPrice(data[0].price);
        console.log(weight);
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

  function onSubmit() {
    toast.promise(promise, {
      loading: "در حال ثبت ...",
      success: () => {
        return "سفارش شما ثبت شد";
      },
      error: "ناموفق",
    });
  }
  return (
    <Form {...form}>
      <form
        onFocus={() => products()}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex min-h-[85svh] w-full flex-col justify-between gap-4 p-8"
      >
        <Separator className="block sm:hidden" />

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>ارتفاع</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
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
                              availableHeights.includes(Number(height.value))
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
                <PopoverTrigger asChild>
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
                        ? top.find((top) => Number(top.value) === field.value)
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
                <PopoverTrigger asChild>
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
                            (bottom) => Number(bottom.value) === field.value,
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
                              availableBottoms.includes(Number(bottom.value))
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
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>مقدار</FormLabel>
              <FormControl>
                <Input
                  disabled={price === 0}
                  onKeyUp={() => setW(Number(field.value))}
                  type="number"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormDescription>مقدار مورد نظر (کیلوگرم) </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="price"
          render={() => (
            <FormItem>
              <FormLabel>{(weight * price).toLocaleString()}</FormLabel>
              <FormDescription>قیمت محاسبه شده (تومان)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-auto w-min">
          <ArrowRightIcon />
          فاکتور
        </Button>
      </form>
    </Form>
  );
}
