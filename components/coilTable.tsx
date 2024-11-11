"use client";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { removeProduct } from "@/actions/removeProduct";
import { usePathname, useRouter } from "next/navigation";

export default function CoilTable(props: {
  id: string;
  diameter: 5.5 | 6.5 | 8 | 10 | 12;
  ribbed: boolean;
  type: "AII" | "AIII" | "3SP" | "RST" | "1008" | "1006";
  producer: "گلستان" | "یزد" | "کرمان" | "شیراز";
  price: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <TableCell>{props.diameter}</TableCell>
      <TableCell>{props.type}</TableCell>
      <TableCell>{props.ribbed ? "آجدار" : "ساده"}</TableCell>
      <TableCell>{props.producer}</TableCell>
      <TableCell className="text-right">{props.price}</TableCell>
      <TableCell className={`${!pathname.includes("dashboard") && "hidden"}`}>
        <Button
          onClick={() => {
            removeProduct(2, props.id), router.refresh();
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
