import type { Metadata } from "next";
import "../src/app/globals.css";
import "./globals.css";
import "./brand-overrides.css";

export const metadata: Metadata = {
  title: { default: "SynxEx — Unified Financial Platform", template: "%s | SynxEx" },
  description: "Explore the SynxEx platform across crypto, forex, stocks, banking, remittance, Web3, and AI.",
  metadataBase: new URL("https://synxex.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-sx-bg text-sx-text-primary font-sans">
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
          <filter id="sx-ink-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
