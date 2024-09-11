"use client"
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import lattice from "@/models/lattices";
async function deleteById(id: string) {
  try {
    console.log(id);
    const result = await lattice.findByIdAndDelete(id);
    console.log("Deleted course: ", result);
  } catch (err) {
    console.log(err);
  }
}
export default function DeleteButton(props: { id: string }) {
  return (
    <Button onClick={() => deleteById(props.id)} className="w-full bg-red-500">
      <ArrowRightIcon />
      حذف
    </Button>
  );
}
