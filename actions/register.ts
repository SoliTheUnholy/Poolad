"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { password, number } = values;
  try {
    await connectDB();
    const admin = "9171179114";
    const Euser = await User.findOne({ number });
    if (Euser) {
      return {
        error: "شماره قبلا استفاده شده",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      role: number.includes(admin) ? "admin" : "user",
      number,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  } catch (e: any) {
    return {
      error: "اتصال برقرار نشد.",
    };
  }
};
