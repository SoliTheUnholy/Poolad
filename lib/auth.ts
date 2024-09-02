import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        number: { label: "number", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          number: credentials?.number,
        }).select("+password");
        if (!user) throw new Error("Wrong phonenumber or password");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password,
        );
        if (!passwordMatch) throw new Error("Wrong phonenumber or password");
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
