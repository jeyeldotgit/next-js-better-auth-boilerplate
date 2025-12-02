import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold">BetterAuth Playground</h1>
        <p className="text-lg text-gray-600">
          A simple sandbox project to experiment with authentication flows using{" "}
          <span className="font-semibold">Better Auth</span> in Next.js.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mt-10">
          <Link
            href="/auth"
            className="px-6 py-3 rounded-2xl shadow bg-black text-white hover:bg-gray-800 transition text-center"
          >
            Get Started
          </Link>

          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-2xl shadow bg-white border hover:bg-gray-100 transition text-center"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
