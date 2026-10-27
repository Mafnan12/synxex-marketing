# SynxEx Cross-Project Consistency & Product Audit

## Audit Date: October 2026
## Projects Audited:
1. **Marketing Website**: `C:\Users\afnan\synxex` (`https://synxex-marketing.vercel.app`)
2. **Web Application**: `C:\Users\afnan\...\synxex-app` (`https://synxex-app.vercel.app`)

---

## 1. Identified Inconsistencies & Contradictions

### A. Navigation & Product Naming
- **Marketing Site**: Uses routes `/markets`, `/ai-agents`, `/banking-cards`, `/remittance`, `/wallet`, `/security`, `/proof-of-reserves`.
- **Web App**: Uses HTML multi-page documents: `/index.html` (Dashboard), `/pages/markets.html`, `/pages/agents.html` (named "AI Trading Agents"), `/pages/banking.html`, `/pages/remittance.html`, `/pages/wallet.html`, `/pages/settings.html`.
- **Discrepancy**:
  - The marketing site uses hyphenated routes (`banking-cards`), while the app uses `banking.html`.
  - The marketing site calls the AI feature "AI Agents", whereas the app header refers to "AI Trading Agents" with simulated auto-trading bots.
  - The app sidebar switches between "User App" and "Admin App" (`/pages/admin/*`), which is not clearly communicated on the marketing site.

### B. User Personalization & Identity
- **Marketing Site**: Has static pages with CTA buttons routing to the app. Does not reflect whether a user is currently signed in.
- **Web App**:
  - Previously had hardcoded user "Afnan" (`afnan@synxex.com`) in the top header component.
  - Welcome banner previously showed generic text without dynamic time-of-day greetings or authenticated user binding.
  - Fix needed: Bind the dashboard header, avatar, and greeting directly to `authService.getUser()` with graceful fallbacks ("Welcome back") when unauthenticated or in guest mode.

### C. Live Capabilities vs. Demo States
- **Contradiction**:
  - Marketing copy on `/proof-of-reserves` and `/security` claims real-time cryptographic reserve validation and multi-sig security. In reality, both apps are frontend client experiences without an active proof-of-reserves oracle or custody backend.
  - **Correction**: Introduce transparent **Canonical Status Badges** (`Demo Experience`, `Preview`, `Planned Integration`) to both marketing and app surfaces so that institutional credibility is preserved without making false claims about active banking licenses or external oracles.

### D. Balance & Multi-Currency Presentation
- **Problem**:
  - The dashboard card displays "$124,592.80" as a single aggregate number alongside multi-currency sub-balances (USD, EUR, GBP) without clarifying that this represents an indicative aggregate converted at demo rates.
  - No option to hide/reveal balance amounts (standard privacy feature in Revolut, Wise, Ramp).
  - **Fix**: Add a balance privacy toggle (eye icon: reveal / mask balance `••••••••`), and an explicit disclaimer tag: `Indicative Aggregate (Demo Data)`.

### E. Card Management Experience
- **Problem**:
  - `pages/banking.html` displayed a visual foil card but lacked interactive controls (such as toggling card freeze status, viewing masked details, or setting monthly spending limits).
  - **Fix**: Implement an interactive card management controller: instant freeze/unfreeze toggle with visual state change (card turns grayscale with "FROZEN" badge), masked number click-to-copy, and spend progress bar towards monthly limit.

### F. Theme Consistency & Contrast
- **Problem**:
  - Marketing site is dark-only with deep obsidian (`#09090b`) and lava orange accents.
  - Web app supports dark and light themes, but light mode previously had low contrast on certain numbers, while dark mode had excessive burgundy glow.
  - **Fix**: Harmonize the design tokens so both projects share identical CSS variable semantics (`--bg-primary`, `--bg-card`, `--text-primary`, `--text-secondary`, `--accent-lava`, `--border-subtle`).

