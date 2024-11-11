"use client";
import {
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { removeProduct } from "@/actions/removeProduct";
import { usePathname, useRouter } from "next/navigation";

export default function LatticeTable(props: {
  id: string;
  height: any;
  top: any;
  bottom: any;
  price: any;
}) {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <>
      <TableCell>{props.height}</TableCell>
      <TableCell>{props.top}</TableCell>
      <TableCell>{props.bottom}</TableCell>
      <TableCell className="text-right">{props.price}</TableCell>
      <TableCell className={`${!pathname.includes("dashboard") && "hidden"}`}>
        <Button
          onClick={() => {
            removeProduct(1, props.id), router.refresh();
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
