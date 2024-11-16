import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";
import type { DefaultSession, DefaultUser, NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { DefaultJWT } from "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      name: string;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser {
    role: string;
    name: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    name: string;
  }
}
export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
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
        if (!passwordMatch) throw new Error("Wrong phone number or password");
        return user;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub ?? "";
        session.user.role = token.role;
        session.user.name = token.name;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
