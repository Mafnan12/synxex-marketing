import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  LineChart,
  ArrowLeftRight,
  Landmark,
  CreditCard,
  Send,
  Bot,
  WalletMinimal,
  PieChart,
  Receipt,
  ShieldCheck,
  Lock,
  ScrollText,
  Settings,
  LifeBuoy,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: { label: string; href: string }[];
}

/** Global authenticated navigation. One source of truth for sidebar + mobile nav. */
export const primaryNavigation: NavItem[] = [
  { label: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  {
    label: "Markets",
    href: "/app/markets",
    icon: LineChart,
    children: [
      { label: "Crypto", href: "/app/markets/crypto" },
      { label: "Forex", href: "/app/markets/forex" },
      { label: "Stocks", href: "/app/markets/stocks" },
    ],
  },
  { label: "Trade", href: "/app/trade", icon: ArrowLeftRight },
  { label: "Banking", href: "/app/banking", icon: Landmark },
  { label: "Cards", href: "/app/cards", icon: CreditCard },
  { label: "Remittance", href: "/app/remittance", icon: Send },
  { label: "AI Agents", href: "/app/ai-agents", icon: Bot },
  { label: "Wallet", href: "/app/wallet", icon: WalletMinimal },
  { label: "Portfolio", href: "/app/portfolio", icon: PieChart },
  { label: "Transactions", href: "/app/transactions", icon: Receipt },
  { label: "KYC", href: "/app/kyc", icon: ShieldCheck },
  { label: "Security", href: "/app/security", icon: Lock },
  { label: "Proof of Reserves", href: "/app/proof-of-reserves", icon: ScrollText },
];

export const secondaryNavigation: NavItem[] = [
  { label: "Settings", href: "/app/settings", icon: Settings },
  { label: "Support", href: "/app/support", icon: LifeBuoy },
];
