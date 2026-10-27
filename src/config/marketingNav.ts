export interface MarketingNavItem {
  label: string;
  href: string;
  description: string;
}

export const productLinks: MarketingNavItem[] = [
  { label: "Markets", href: "/markets", description: "Crypto, forex, and stocks in one venue" },
  { label: "AI Agents", href: "/ai-agents", description: "AI-managed trading strategies" },
  { label: "Banking & Cards", href: "/banking-cards", description: "Multi-currency accounts and cards" },
  { label: "Remittance", href: "/remittance", description: "Global transfers, transparently priced" },
  { label: "Web3 Wallet", href: "/wallet", description: "One wallet across 30+ networks" },
  { label: "Security", href: "/security", description: "How SynxEx protects your account" },
  { label: "Proof of Reserves", href: "/proof-of-reserves", description: "Reserve verification approach" },
];

export const companyLinks: MarketingNavItem[] = [
  { label: "About", href: "/about", description: "Our mission and approach" },
  { label: "Contact", href: "/contact", description: "Talk to the SynxEx team" },
];

/** Direct items inside the pill navbar. */
export interface PrimaryNavItem {
  label: string;
  href: string;
  badge?: string;
}

export const primaryPillNav: PrimaryNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Markets", href: "/markets" },
  { label: "AI Agents", href: "/ai-agents", badge: "NEW" },
  { label: "Banking & Cards", href: "/banking-cards" },
  { label: "Remittance", href: "/remittance" },
];

/** Columns rendered inside the "Resources" mega menu. */
export interface MegaMenuColumn {
  heading: string;
  links: MarketingNavItem[];
}

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "AI Agents", href: "/ai-agents", description: "AI-managed trading strategies" },
      { label: "Web3 Wallet", href: "/wallet", description: "One wallet across 30+ networks" },
      { label: "Security", href: "/security", description: "How SynxEx protects your account" },
      { label: "Proof of Reserves", href: "/proof-of-reserves", description: "Reserve verification approach" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about", description: "Our mission and approach" },
      { label: "Contact", href: "/contact", description: "Talk to the SynxEx team" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "Sign in", href: "https://synxex-app.vercel.app/pages/login.html", description: "Access your SynxEx account" },
      { label: "Get Started", href: "https://synxex-app.vercel.app/pages/register.html", description: "Open a SynxEx account" },
    ],
  },
];
