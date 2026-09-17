"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { SignatureLogo } from "@/components/marketing/SignatureLogo";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Authentication is not yet connected — routes straight into the demo dashboard.
    router.push("/app/dashboard");
  }

  return (
    <div data-theme="dark" className="flex min-h-screen flex-1 items-center justify-center bg-sx-bg px-4 py-12">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <div className="mx-auto flex justify-center">
            <SignatureLogo size={32} />
          </div>
          <h1 className="mt-4 text-xl font-semibold tracking-tight text-sx-text-primary">Sign in to SynxEx</h1>
          <p className="mt-1 text-sm text-sx-text-secondary">One account for every market.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-sx-text-primary">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="h-10 w-full rounded-[var(--sx-radius-md)] border border-sx-border bg-sx-surface px-3 text-sm text-sx-text-primary placeholder:text-sx-text-tertiary focus:outline-none focus:ring-2 focus:ring-sx-brand"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-sx-text-primary">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="h-10 w-full rounded-[var(--sx-radius-md)] border border-sx-border bg-sx-surface px-3 text-sm text-sx-text-primary placeholder:text-sx-text-tertiary focus:outline-none focus:ring-2 focus:ring-sx-brand"
            />
          </div>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <p className="text-center text-xs text-sx-text-tertiary">
          Authentication is not yet connected to a live identity provider. Submitting opens the demo dashboard.
        </p>
        <p className="text-center text-sm text-sx-text-secondary">
          Don&apos;t have an account?{" "}
          <Link href="/login" className="font-medium text-sx-brand hover:underline">
            Open one
          </Link>
        </p>
      </div>
    </div>
  );
}
