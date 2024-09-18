"use server";
import { connectDB } from "@/lib/mongodb";
import order from "@/models/orders";
import { availability } from "./availability";

export const neworder = async (values: any) => {
  const { userId, productId, weight, type } = values;
  try {
    await connectDB();
    const price = await availability(type, [
      { _id: productId },
      { _id: 1, price: 1 },
    ]).then((data) => data[0].price);
    const Order = new order({
      userId,
      productId,
      weight,
      price,
      type,
    });
    const saved = await Order.save();
    return JSON.parse(JSON.stringify(saved));
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
