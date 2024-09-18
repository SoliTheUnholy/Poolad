"use server";
import { connectDB } from "@/lib/mongodb";
import coil from "@/models/coils";
import drawn from "@/models/drawns";
import lattice from "@/models/lattices";

export const removeProduct = async (product: Number, id: string) => {
  try {
    await connectDB();
    if (product === 1) {
      const Lattice = await lattice.findByIdAndDelete(id);
    } else if (product === 2) {
      const Coil = await coil.findByIdAndDelete(id);
    } else if (product === 3) {
      const Drawn = await drawn.findByIdAndDelete(id);
    } else {
      return {
        error: "undefined product",
      };
    }
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
