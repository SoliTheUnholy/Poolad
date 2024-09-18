"use server";
import { connectDB } from "@/lib/mongodb";
import order from "@/models/orders";

export const getOrder = async (props: [object, object]) => {
  try {
    await connectDB();
    const orders = JSON.parse(JSON.stringify(await order.find(...props)));
    return orders;
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
