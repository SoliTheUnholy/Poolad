"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
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
import { ArrowRightIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Separator } from "./ui/separator";

const diameter = [
  { label: "5.5", value: "5.5" },
  { label: "6.5", value: "6.5" },
  { label: "8", value: "8" },
  { label: "10", value: "10" },
  { label: "12", value: "12" },
] as const;

const ribbed = [
  { label: "آجدار", value: "true" },
  { label: "ساده", value: "false" },
] as const;

const type = [
  { label: "AII", value: "AII" },
  { label: "AIII", value: "AIII" },
  { label: "3SP", value: "3SP" },
  { label: "RST", value: "RST" },
  { label: "1008", value: "1008" },
  { label: "1006", value: "1006" },
] as const;

const FormSchema = z.object({
  diameter: z.string({
    required_error: "قطر را انتخاب کنید",
  }),
  ribbed: z.string({
    required_error: " آجدار بودن را انتخاب کنید",
  }),
  type: z.string({
    required_error: "نوع کلاف را انتخاب کنید",
  }),
  weight: z.string({
    required_error: "مقدار را وارد کنید",
  }),
});

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));
export function CoilForm() {
  const [price, setPrice] = useState(0);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex min-h-[85svh] w-full flex-col justify-between gap-4 p-8"
      >
        <Separator className="block sm:hidden" />
        <FormField
          control={form.control}
          name="diameter"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>قطر</FormLabel>
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
                        ? diameter.find(
                            (diameter) => diameter.value === field.value,
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
                        {diameter.map((diameter) => (
                          <CommandItem
                            value={diameter.label}
                            key={diameter.value}
                            onSelect={() => {
                              form.setValue("diameter", diameter.value);
                            }}
                          >
                            {diameter.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                diameter.value === field.value
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
          name="ribbed"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>آجدار</FormLabel>
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
                            value={ribbed.label}
                            key={ribbed.value}
                            onSelect={() => {
                              form.setValue("ribbed", ribbed.value);
                            }}
                          >
                            {ribbed.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                ribbed.value === field.value
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
              <FormDescription>آجدار</FormDescription>
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
                        ? type.find((type) => type.value === field.value)?.label
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
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>مقدار</FormLabel>
              <FormControl>
                <Input
                  onChangeCapture={() => setPrice(Number(field.value))}
                  onKeyUp={() => setPrice(Number(field.value))}
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
          name="price"
          render={() => (
            <FormItem>
              <FormLabel>{(price * 25000).toString()}</FormLabel>
              <FormDescription>قیمت محاسبه شده </FormDescription>
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
