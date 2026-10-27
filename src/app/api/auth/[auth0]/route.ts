import { NextRequest, NextResponse } from "next/server";

const FALLBACK_APP_LOGIN = "https://synxex-app.vercel.app/pages/login.html";
const FALLBACK_APP_REGISTER = "https://synxex-app.vercel.app/pages/register.html";
const FALLBACK_APP_ROOT = "https://synxex-app.vercel.app/";

/**
 * Handles /api/auth/[auth0] routes (login, logout, callback, me).
 * Uses the Auth0Client middleware handler from @auth0/nextjs-auth0 v4 when configured,
 * or gracefully redirects to synxex-app routes in demo / pre-configuration mode.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ auth0: string }> }
) {
  const { auth0: route } = await params;
  const isAuth0Configured =
    Boolean(process.env.AUTH0_ISSUER_BASE_URL) &&
    Boolean(process.env.AUTH0_CLIENT_ID) &&
    !process.env.AUTH0_ISSUER_BASE_URL?.includes("your-tenant");

  if (isAuth0Configured) {
    try {
      const { Auth0Client } = await import("@auth0/nextjs-auth0/server");
      const auth0 = new Auth0Client({
        domain: process.env.AUTH0_ISSUER_BASE_URL?.replace(/^https?:\/\//, ""),
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
      });

      return await auth0.middleware(req);
    } catch (err) {
      console.error("[Auth0 Route Error]", err);
    }
  }

  // Graceful fallback for development / before Auth0 tenant configuration is populated
  const destination =
    route === "signup"
      ? FALLBACK_APP_REGISTER
      : route === "logout"
      ? (process.env.APP_BASE_URL || "https://synxex-chi.vercel.app")
      : FALLBACK_APP_LOGIN;

  return NextResponse.redirect(destination);
}
