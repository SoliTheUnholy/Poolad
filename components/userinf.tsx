"use client";
import { useSession } from "next-auth/react";

export default function UserInf() {
  const session = useSession();
  return (
    <span className="text-2xl font-bold">
      {session.data?.user.name} خوش آمدید !
    </span>
  );
}
