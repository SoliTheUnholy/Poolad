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
import { drawnAdd } from "@/actions/drawnAdd";
import { useRouter } from "next/navigation";


  const diameters = [
    { label: "4", value: "4" },
    { label: "4.2", value: "4.2" },
    { label: "4.4", value: "4.4" },
    { label: "4.6", value: "4.6" },
    { label: "4.7", value: "4.7" },
    { label: "5", value: "5" },
    { label: "5.5", value: "5.5" },
    { label: "6", value: "6" },
    { label: "8", value: "8" },
    { label: "10", value: "10" },
    { label: "12", value: "12" },
  ] as const;

const ribs = [
  { label: "آجدار", value: true },
  { label: "ساده", value: false },
] as const;


const FormSchema = z.object({
  diameters: z.string({
    required_error: "قطر را انتخاب کنید",
  }),
  ribs: z.boolean({
    required_error: " آجدار بودن را انتخاب کنید",
  }),
  price: z.string({
    required_error: "مقدار را وارد کنید",
  }),
});

export default function CoilAddForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const r = new Promise((resolve) =>
      resolve(
        drawnAdd({
          diameter: Number(values.diameters),
          ribbed: values.ribs,
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
        className="grid grid-cols-1 grid-rows-4 items-start justify-center p-8 lg:grid-cols-4 lg:grid-rows-1 lg:pb-0"
      >
        <FormField
          control={form.control}
          name="diameters"
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
                        "min-w-28 justify-between lg:rounded-l-none",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? diameters.find(
                            (diameters) => diameters.value === field.value,
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
                        {diameters.map((diameters) => (
                          <CommandItem
                            value={diameters.label}
                            key={diameters.value}
                            onSelect={() => {
                              form.setValue("diameters", diameters.value);
                            }}
                          >
                            {diameters.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                diameters.value === field.value
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
        <FormField
          control={form.control}
          name="ribs"
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
                        "min-w-28 justify-between lg:rounded-none",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {(field.value === true) || field.value === false
                        ? ribs.find((ribs) => ribs.value === field.value)?.label
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
                        {ribs.map((ribs) => (
                          <CommandItem
                            value={ribs.label}
                            key={String(ribs.value)}
                            onSelect={() => {
                              form.setValue("ribs", ribs.value);
                            }}
                          >
                            {ribs.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                ribs.value === field.value
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
