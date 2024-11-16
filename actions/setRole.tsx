"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";

export const setRole = async (values: any) => {
  const { id, role } = values;
  try {
    await connectDB();
    const Euser = await User.findByIdAndUpdate(id, {
      $set: {
        role,
      },
    });
    const savedUser = await Euser.save();
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
