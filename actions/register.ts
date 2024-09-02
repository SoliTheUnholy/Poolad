"use server";
import { connectDB } from "@/lib/mongodb";
import user from "@/models/user";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";

export const register = async (values: any) => {
  const { password, number } = values;
  try {
    await connectDB();
    const Euser = await user.findOne({ number });
    if (Euser) {
      return {
        error: "Number is used",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const User = new user({
      number,
      password: hashedPassword,
    });
    const savedUser = await User
      .save()
      .then(signIn("credentials", { number, password: hashedPassword }));
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};
