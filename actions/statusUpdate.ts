"use server";
import { connectDB } from "@/lib/mongodb";
import order from "@/models/orders";

export const updateStatus = async (values: any) => {
  const { id, status } = values;
  try {
    await connectDB();
    const change = await order.findByIdAndUpdate(id, {
      $set: {
        status,
      },
    });
    const savedchanges = await change.save();
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
