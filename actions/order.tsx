"use server";
import { connectDB } from "@/lib/mongodb";
import order from "@/models/orders";
import { availability } from "./availability";

export const neworder = async (values: any) => {
  const { userId, productId, weight, type } = values;
  try {
    await connectDB();
    const saved = await availability(type, [{ _id: productId }, {}]).then(
      async (data) => {
        const { price, _id, __v, createdAt, updatedAt, ...productInfo } =
          data[0];
        const Order = new order({
          userId,
          productId,
          weight,
          price,
          productInfo,
          type,
          status: "pending",
        });
        return await Order.save();
      },
    );
    return JSON.parse(JSON.stringify(saved));
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
