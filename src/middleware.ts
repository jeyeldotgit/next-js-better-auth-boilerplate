// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const sessionToken = req.cookies.get(
    "__Secure-better-auth.session_token"
  )?.value;

  // If no session token → redirect to /auth
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", // Protect dashboard and subroutes
    "/products/:path*", // Protect products subroutes
  ],
};
