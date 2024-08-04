"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, username, occupation } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists",
      };
    }
    const usernamw = await User.findOne({ username });
    if (userFound) {
      return {
        error: "Username is not available",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      occupation,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};
