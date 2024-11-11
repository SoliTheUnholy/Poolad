"use client";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { removeProduct } from "@/actions/removeProduct";
import { usePathname, useRouter } from "next/navigation";

export default function DrawnTable(props: {
  id: string;
  diameter: 4 | 4.2 | 4.4 | 4.6 | 4.7 | 5 | 5.5 | 6 | 8 | 10 | 12;
  ribbed: boolean;
  price: number;
}) {
  const pathname = usePathname()
  const router = useRouter();
  return (
    <>
      <TableCell>{props.diameter}</TableCell>
      <TableCell>{props.ribbed ? "آجدار" : "ساده"}</TableCell>
      <TableCell className="text-right">{props.price}</TableCell>
      <TableCell className={`${!pathname.includes("dashboard") && "hidden"}`}>
        <Button
          onClick={() => {
            removeProduct(3, props.id), router.refresh();
          }}
          className="w-full bg-red-500"
        >
          <ArrowRightIcon />
          حذف
        </Button>
      </TableCell>
    </>
  );
}
