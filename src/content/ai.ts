export const AI_AGENT_CARDS = [
  {
    id: "01",
    name: "Research assistant",
    role: "Market and document context",
    description:
      "A planned assistant for organizing selected filings, news, and market material into summaries for review.",
    accent: "rgba(255, 90, 31, 0.22)",
    tags: ["Research", "Sources", "Summary"],
  },
  {
    id: "02",
    name: "Risk context",
    role: "Exposure and policy review",
    description:
      "A planned view of relevant exposure and policy constraints to help people assess a decision.",
    accent: "rgba(110, 24, 56, 0.32)",
    tags: ["Risk", "Context", "Review"],
  },
  {
    id: "03",
    name: "Workflow coordinator",
    role: "Approved task coordination",
    description:
      "A future concept for organizing approved workflow steps and routing decisions to a person for review.",
    accent: "rgba(255, 139, 104, 0.18)",
    tags: ["Workflows", "Approvals", "Human review"],
  },
];

export const AI_WORKFLOW_STEPS = [
  {
    id: "01",
    title: "Set the question",
    description:
      "Choose the market or topic to review and state what information is needed.",
  },
  {
    id: "02",
    title: "Gather context",
    description:
      "Bring together selected market material, news, and relevant documents.",
  },
  {
    id: "03",
    title: "Summarize findings",
    description:
      "Present useful evidence, source references, and risk context in one review.",
  },
  {
    id: "04",
    title: "Review before action",
    description:
      "A person decides whether to continue; this concept does not execute financial trades.",
  },
];

export const TRADING_AGENT_DATA = [
  {
    title: "Market signals",
    description:
      "A planned summary of selected price movements, volatility, and relevant events for review.",
    metrics: ["Price movement", "Volatility", "Events"],
    tone: "orange" as const,
  },
  {
    title: "News context",
    description:
      "A planned summary of selected news and its possible relevance to a market or asset.",
    metrics: ["News", "Events", "Review"],
    tone: "wine" as const,
  },
  {
    title: "Risk context",
    description:
      "A planned view of exposure and stated constraints to support human review.",
    metrics: ["Exposure", "Constraints", "Review"],
    tone: "smoke" as const,
  },
];

export const MARKET_INTELLIGENCE_ITEMS = [
  {
    kicker: "Research",
    title: "Selected sources",
    description:
      "Review market material, public news, and selected documents together.",
  },
  {
    kicker: "Context",
    title: "Market and risk context",
    description:
      "Bring relevant market movement and stated risk considerations into view.",
  },
  {
    kicker: "Review",
    title: "Human decision-making",
    description:
      "Use the summary as a starting point for review; the concept does not place trades.",
  },
];

export const AI_ROADMAP = [
  {
    id: "01",
    title: "Research workspaces",
    description:
      "A planned space for reviewing selected sources, summaries, and notes together.",
    status: "Exploring",
  },
  {
    id: "02",
    title: "Approved workflows",
    description:
      "A future concept for organizing task steps and making approval points clear.",
    status: "Planned",
  },
  {
    id: "03",
    title: "AI insights",
    description:
      "Planned summaries that bring selected information and relevant context together for review.",
    status: "Future",
  },
];
