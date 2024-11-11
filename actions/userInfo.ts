"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";

export const userInfo = async (
  props: [object, object],
) => {
  try {
    await connectDB();
      const user = JSON.parse(JSON.stringify(await User.find(...props)));
      return user;
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
