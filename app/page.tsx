"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="rounded border border-solid border-black"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          }}
        >
          Sign Out
        </button>
      );
    } else if (status === "loading") {
      return <span className="mt-7 text-sm text-[#888]">Loading...</span>;
    } else {
      return (
        <Link
          href="/login"
          className="rounded border border-solid border-black"
        >
          Sign In
        </Link>
      );
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Home</h1>
      {showSession()}
    </main>
  );
}
