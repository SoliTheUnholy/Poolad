"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";
import bcrypt from "bcryptjs";

export const updatePassword = async (values: any) => {
  const { id, password } = values;
  try {
    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    const Euser = await User.findByIdAndUpdate(id, {
      $set: {
        password: hashedPassword,
      },
    });
    const savedUser = await Euser.save();
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
