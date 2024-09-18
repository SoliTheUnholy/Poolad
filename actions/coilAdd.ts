"use server";
import { connectDB } from "@/lib/mongodb";
import coil from "@/models/coils";

export const coilAdd = async (values: any) => {
  const { diameter, type, ribbed, producer, price } = values;
  try {
    await connectDB();
    const prev = await coil.findOne({ diameter, type, ribbed, producer });
    if (prev) {
      return {
        error: "محصول قبلا اضافه شده",
      };
    }
    const Coil = new coil({
      diameter,
      type,
      ribbed,
      producer,
      price,
    });
    const saved = await Coil.save();
    return {
      message: ".",
    };
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
