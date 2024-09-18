"use server";
import { connectDB } from "@/lib/mongodb";
import coil from "@/models/coils";
import drawn from "@/models/drawns";
import lattice from "@/models/lattices";

export const availability = async (
  product: Number,
  props: [object, object],
) => {
  try {
    await connectDB();
    if (product === 1) {
      const Lattice = JSON.parse(JSON.stringify(await lattice.find(...props)));
      return Lattice;
    } else if (product === 2) {
      const Coil = JSON.parse(JSON.stringify(await coil.find(...props)));
      return Coil;
    } else if (product === 3) {
      const Drawn = JSON.parse(JSON.stringify(await drawn.find(...props)));
      return Drawn;
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
