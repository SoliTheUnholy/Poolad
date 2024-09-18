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
import { ArrowRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { latticeAdd } from "@/actions/latticeAdd";
import { useRouter } from "next/navigation";

const heights = [
  { label: "پله", value: "15" },
  { label: "20", value: "20" },
  { label: "25", value: "25" },
  { label: "30", value: "30" },
  { label: "35", value: "35" },
] as const;

const tops = [
  { label: "8", value: "8" },
  { label: "10", value: "10" },
  { label: "12", value: "12" },
] as const;

const bottoms = [
  { label: "8", value: "8" },
  { label: "10", value: "10" },
  { label: "12", value: "12" },
] as const;

const FormSchema = z.object({
  heights: z.string({
    required_error: "ارتفاع را انتخاب کنید",
  }),
  tops: z.string({
    required_error: "قطر راس را انتخاب کنید",
  }),
  bottoms: z.string({
    required_error: "قطر قائده را انتخاب کنید",
  }),
  price: z.string({
    required_error: "مقدار را وارد کنید",
  }),
});

export default function LatticeAddForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const r = new Promise((resolve) =>
      resolve(
        latticeAdd({
          height: Number(values.heights),
          top: Number(values.tops),
          bottom: Number(values.bottoms),
          price: Number(values.price),
        }),
      ),
    );
    toast.promise(r, {
      loading: "در حال ثبت ...",
      success: () => {
        return "محصول ثبت شد";
      },
      error: "ناموفق",
    });
    router.refresh();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 grid-rows-5 items-start justify-center p-8 lg:grid-cols-5 lg:grid-rows-1 lg:pb-0"
      >
        <FormField
          control={form.control}
          name="heights"
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
                        "min-w-28 justify-between lg:rounded-l-none",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? heights.find(
                            (heights) => heights.value === field.value,
                          )?.label
                        : "انتخاب کنید"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="min-w-28 p-0">
                  <Command>
                    <CommandInput placeholder="جستجو" className="h-9" />
                    <CommandList>
                      <CommandEmpty>محصول موجود نیست</CommandEmpty>
                      <CommandGroup>
                        {heights.map((heights) => (
                          <CommandItem
                            value={heights.label}
                            key={heights.value}
                            onSelect={() => {
                              form.setValue("heights", heights.value);
                            }}
                          >
                            {heights.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                heights.value === field.value
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
              <FormDescription>ارتفاع خرپا </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tops"
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
                        "min-w-28 justify-between lg:rounded-none",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? tops.find((tops) => tops.value === field.value)?.label
                        : "انتخاب کنید"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="min-w-28 p-0">
                  <Command>
                    <CommandInput placeholder="جستجو" className="h-9" />
                    <CommandList>
                      <CommandEmpty>محصول موجود نیست</CommandEmpty>
                      <CommandGroup>
                        {tops.map((tops) => (
                          <CommandItem
                            value={tops.label}
                            key={tops.value}
                            onSelect={() => {
                              form.setValue("tops", tops.value);
                            }}
                          >
                            {tops.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                tops.value === field.value
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
        <FormField
          control={form.control}
          name="bottoms"
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
                        "min-w-28 justify-between lg:rounded-none",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? bottoms.find(
                            (bottoms) => bottoms.value === field.value,
                          )?.label
                        : "انتخاب کنید"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="min-w-28 p-0">
                  <Command>
                    <CommandInput placeholder="جستجو" className="h-9" />
                    <CommandList>
                      <CommandEmpty>محصول موجود نیست</CommandEmpty>
                      <CommandGroup>
                        {bottoms.map((bottoms) => (
                          <CommandItem
                            value={bottoms.label}
                            key={bottoms.value}
                            onSelect={() => {
                              form.setValue("bottoms", bottoms.value);
                            }}
                          >
                            {bottoms.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                bottoms.value === field.value
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
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>قیمت</FormLabel>
              <FormControl>
                <Input
                  className="min-w-28 lg:rounded-none"
                  type="number"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormDescription>قیمت مورد نظر (تومان) </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-[22px] min-w-28 lg:rounded-r-none">
          <ArrowRightIcon />
          افزودن
        </Button>
      </form>
    </Form>
  );
}
