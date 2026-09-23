import Link from "next/link";
import { productLinks, companyLinks } from "@/config/marketingNav";
import { SignatureLogo } from "./SignatureLogo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,106,43,0.08),transparent_40%),#090909]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center">
              <SignatureLogo size={30} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              One platform for every market — crypto, forex, stocks, banking, cards, remittance, AI agents, and
              Web3, unified under a single account.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb38f]">Products</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb38f]">Company</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/login" className="text-sm text-white/60 transition-colors hover:text-white">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb38f]">Legal</p>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-white/45">Terms — coming soon</li>
              <li className="text-sm text-white/45">Privacy — coming soon</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} SynxEx. All rights reserved.</p>
          <p className="max-w-xl text-xs leading-relaxed text-white/40">
            SynxEx is in active development. Products and figures described on this site are informational and do
            not represent live trading, banking, or custody services.
          </p>
        </div>
      </div>
    </footer>
  );
}
