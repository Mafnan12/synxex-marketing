import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Synxex | Software, AI & Data Systems", template: "%s | Synxex" },
  description: "Synxex designs and develops practical software, AI, data, and digital product experiences.",
  metadataBase: new URL("https://synxex.com"),
  openGraph: { type: "website", siteName: "Synxex", title: "Synxex | Software, AI & Data Systems", description: "Practical systems for the work that matters." },
  twitter: { card: "summary_large_image" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
