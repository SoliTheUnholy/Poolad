"use server";
import { connectDB } from "@/lib/mongodb";
import drawn from "@/models/drawns";

export const drawnAdd = async (values: any) => {
  const { diameter, ribbed, price } = values;
  try {
    await connectDB();
    const prev = await drawn.findOne({ diameter, ribbed });
    if (prev) {
      return {
        error: "محصول قبلا اضافه شده",
      };
    }
    const Drawn = new drawn({
      diameter,
      ribbed,
      price,
    });
    const saved = await Drawn.save();
    return {
      message: ".",
    };
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
