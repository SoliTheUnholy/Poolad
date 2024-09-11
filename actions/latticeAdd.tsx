"use server";
import { connectDB } from "@/lib/mongodb";
import lattice from "@/models/lattices";

export const latticeAdd = async (values: any) => {
  const { height, top, bottom, price } = values;
  try {
    await connectDB();
    const prev = await lattice.findOne({ height, top, bottom });
    if (prev) {
      return {
        error: "محصول قبلا اضافه شده",
      };
    }
    const Lattice = new lattice({
      height,
      top,
      bottom,
      price,
    });
    const saved = await Lattice.save();
    return {
      message: ".",
    };
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
