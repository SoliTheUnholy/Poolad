"use server";
import { connectDB } from "@/lib/mongodb";
import order from "@/models/orders";

export const updateOrder = async (values: any) => {
  const { id, status } = values;
  try {
    await connectDB();
    const Euser = await order.findByIdAndUpdate(id, {
      $set: {
        status,
      },
    });
    const savedUser = await Euser.save();
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
