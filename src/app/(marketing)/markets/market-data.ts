export const markets = [
  { name: "Cryptocurrency", slug: "crypto", symbol: "₿", description: "Discover Bitcoin, Ethereum, and a new generation of digital assets. Explore the technology reshaping how value moves.", instruments: "BTC · ETH · SOL", tag: "A new era of value" },
  { name: "Forex", slug: "forex", symbol: "€", description: "Explore the relationships between global currencies, from major pairs to emerging economies.", instruments: "EUR/USD · GBP/USD · USD/JPY", tag: "The world, exchanged" },
  { name: "Stocks", slug: "stocks", symbol: "↗", description: "Discover the companies shaping tomorrow. Explore global equities and the stories behind their performance.", instruments: "AAPL · NVDA · MSFT", tag: "Ideas that move economies" },
  { name: "Commodities", slug: "commodities", symbol: "◈", description: "Explore the tangible foundations of the global economy, from precious metals to energy.", instruments: "GOLD · SILVER · WTI", tag: "Value in its purest form" },
  { name: "Indices", slug: "indices", symbol: "≋", description: "See the bigger picture through benchmarks that track the pulse of global financial markets.", instruments: "S&P 500 · NASDAQ 100 · FTSE 100", tag: "A wider perspective" },
  { name: "Digital Assets", slug: "digital", symbol: "✧", description: "Discover tokenization, blockchain networks, and the evolving digital financial ecosystem.", instruments: "TOKENIZATION · NETWORKS · WEB3", tag: "Beyond the expected" },
];
export const assets = [
  { name: "Bitcoin", symbol: "BTC", category: "Cryptocurrency", price: 67432.80, change: 2.34, mark: "₿", market: 0 },
  { name: "Ethereum", symbol: "ETH", category: "Cryptocurrency", price: 3521.46, change: 1.82, mark: "◇", market: 0 },
  { name: "Gold", symbol: "XAU/USD", category: "Commodities", price: 2341.20, change: .68, mark: "◈", market: 3 },
  { name: "Euro / US Dollar", symbol: "EUR/USD", category: "Forex", price: 1.0842, change: -.12, mark: "€", market: 1 },
  { name: "S&P 500", symbol: "SPX", category: "Indices", price: 5280.15, change: .92, mark: "≋", market: 4 },
  { name: "NASDAQ 100", symbol: "NDX", category: "Indices", price: 18745.32, change: 1.26, mark: "↗", market: 4 },
  { name: "Apple", symbol: "AAPL", category: "Stocks", price: 192.35, change: -.43, mark: "A", market: 2 },
  { name: "Solana", symbol: "SOL", category: "Digital Assets", price: 162.48, change: 3.16, mark: "≡", market: 5 },
];
export function price(value: number) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: value < 2 ? 4 : 2, maximumFractionDigits: value < 2 ? 4 : 2 }).format(value); }
export function series(seed: number, length = 60) { return Array.from({ length }, (_, i) => 35 + i * .57 + Math.sin(i * .72 + seed) * 8 + Math.sin(i * 1.93 + seed) * 3); }
export function line(values: number[], width = 600, height = 200) { const min = Math.min(...values) - 8, max = Math.max(...values) + 8; return values.map((v, i) => `${i ? "L" : "M"}${(i / (values.length - 1) * width).toFixed(2)},${(height - (v - min) / (max - min) * height).toFixed(2)}`).join(" "); }
