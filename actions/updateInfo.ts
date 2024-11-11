"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";

export const updateUserInfo = async (values: any) => {
  const { id, name, code, address, zipCode } = values;
  try {
    await connectDB();
    const Euser = await User.findByIdAndUpdate(id, {
      $set: {
        name,
        code,
        address,
        zipCode,
      },
    });
    const savedUser = await Euser.save();
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
