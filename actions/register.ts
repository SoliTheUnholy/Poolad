"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { password, number } = values;
  try {
    await connectDB();
    const Euser = await User.findOne({ number });
    if (Euser) {
      return {
        error: "Number is used",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      number,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};
