"use client";

import { signOut } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";

interface User {
  name?: string;
  email: string;
}

export default function DashboardClient({ user }: { user: User }) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (err) {
      console.error("Sign out failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold">
        Welcome, {user.name || user.email}!
      </h1>

      <p className="mt-4 text-gray-600">You have successfully logged in.</p>

      <button
        onClick={handleSignOut}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>

      <button
        onClick={() => router.push("/products")}
        className="mt-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Go to Products
      </button>
    </div>
  );
}
