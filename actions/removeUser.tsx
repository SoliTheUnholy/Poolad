"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";

export const removeUser = async (id: string) => {
  try {
    await connectDB();
    const usy = await User.findByIdAndDelete(id);
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
