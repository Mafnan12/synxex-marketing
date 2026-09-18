/**
 * Configurable currency registry — never hardcode currency lists inline in
 * components. Backend can extend/restrict this per jurisdiction.
 */
export interface CurrencyConfig {
  code: string;
  name: string;
  symbol: string;
  decimals: number;
  kind: "fiat" | "crypto";
}

export const supportedCurrencies: CurrencyConfig[] = [
  { code: "USD", name: "US Dollar", symbol: "$", decimals: 2, kind: "fiat" },
  { code: "EUR", name: "Euro", symbol: "€", decimals: 2, kind: "fiat" },
  { code: "GBP", name: "British Pound", symbol: "£", decimals: 2, kind: "fiat" },
  { code: "AED", name: "UAE Dirham", symbol: "AED", decimals: 2, kind: "fiat" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", decimals: 2, kind: "fiat" },
  { code: "BTC", name: "Bitcoin", symbol: "₿", decimals: 8, kind: "crypto" },
  { code: "ETH", name: "Ethereum", symbol: "Ξ", decimals: 6, kind: "crypto" },
  { code: "USDT", name: "Tether", symbol: "₮", decimals: 2, kind: "crypto" },
];

export function getCurrency(code: string): CurrencyConfig {
  return (
    supportedCurrencies.find((c) => c.code === code) ?? {
      code,
      name: code,
      symbol: code,
      decimals: 2,
      kind: "fiat",
    }
  );
}
