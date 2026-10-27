# SynxEx Canonical Product Catalog

This catalog defines the single source of truth for all SynxEx features across the Marketing Website and the Web Application.

---

## Canonical Feature Definitions

| Canonical Name | Key Purpose | Implementation Status | Marketing Route | Web App Route | Supported Actions |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Unified Dashboard** | Central financial overview across currencies, cards, and activity | **Demo Experience** | `/` (Home) | `/index.html` | Hide/reveal balance, quick actions (Send, Add Funds, Convert), filter activity |
| **Multi-Currency Accounts** | Hold, receive, and swap fiat currencies (USD, EUR, GBP) | **Demo Experience** | `/banking-cards` | `/pages/banking.html` | View sub-balances, initiate currency exchange, view IBAN/account details |
| **Virtual & Physical Cards** | Debit cards linked to unified balance with card controls | **Interactive Demo** | `/banking-cards` | `/pages/banking.html` | Freeze/unfreeze card, reveal details, update spending velocity cap |
| **Multi-Asset Markets** | Real-time market data across crypto, forex, and equities | **Market Tracking** | `/markets` | `/pages/markets.html` | Search assets, filter asset classes (Crypto, Forex, Stocks), view sparklines |
| **AI Trading Agents** | Autonomous strategy bots with risk governance profiles | **Prototype / Concept** | `/ai-agents` | `/pages/agents.html` | Inspect strategy metrics, toggle agent active status, view 30D ROI |
| **Global Remittance** | Transparent cross-border transfers with itemized fees | **Interactive Prototype** | `/remittance` | `/pages/remittance.html` | Calculate fees, select corridor, review transfer breakdown |
| **Web3 Multi-Chain Wallet** | Decentralized asset custody across 30+ networks | **Prototype** | `/wallet` | `/pages/wallet.html` | View token balances, inspect network connections, copy public keys |
| **Security & Reserves** | Account safety, 2FA, session tracking, reserve proof | **Preview / Demo** | `/security`, `/proof-of-reserves` | `/pages/settings.html` | Toggle 2FA, review active sessions, inspect platform security posture |

---

## Canonical Status Definitions
- **`Live`**: Backed by operational infrastructure and verified data.
- **`Interactive Demo`**: Functional client-side simulation allowing users to experience workflows with sample data.
- **`Market Tracking`**: Real-time or delayed informational financial data without direct order execution.
- **`Prototype / Concept`**: Architectural preview showcasing UX design and workflow logic for future backend connection.
- **`Planned`**: On the product roadmap; clearly marked as upcoming.

