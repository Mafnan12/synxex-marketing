export const AI_AGENT_CARDS = [
  {
    id: "01",
    name: "Research Agent",
    role: "Market and document intelligence",
    description:
      "Gathers relevant filings, news, and financial context to produce concise research summaries for human review.",
    accent: "rgba(255, 90, 31, 0.22)",
    tags: ["Research", "Docs", "News"],
  },
  {
    id: "02",
    name: "Risk Agent",
    role: "Policy and exposure checks",
    description:
      "Ensures actions remain aligned to constraints, risk thresholds, and operational approval rules before execution.",
    accent: "rgba(110, 24, 56, 0.32)",
    tags: ["Risk", "Compliance", "Guardrails"],
  },
  {
    id: "03",
    name: "Execution Agent",
    role: "Workflow orchestration",
    description:
      "Coordinates multi-step tasks, triggers approved tools, and passes outputs to downstream validation or human review.",
    accent: "rgba(255, 139, 104, 0.18)",
    tags: ["Ops", "Tools", "Automation"],
  },
];

export const AI_WORKFLOW_STEPS = [
  {
    id: "01",
    title: "Define the goal",
    description:
      "Translate the task into a clear objective, required inputs, and success criteria.",
  },
  {
    id: "02",
    title: "Collect context",
    description:
      "Pull from approved data sources, internal systems, and structured knowledge stores.",
  },
  {
    id: "03",
    title: "Plan the response",
    description:
      "Break the problem into milestones, validation gates, and fallback actions.",
  },
  {
    id: "04",
    title: "Act within policy",
    description:
      "Use approved tools and external integrations only within the specified permissions.",
  },
  {
    id: "05",
    title: "Evaluate outputs",
    description:
      "Check quality, provenance, and operational alignment before handing off to the next stage.",
  },
  {
    id: "06",
    title: "Escalate when needed",
    description:
      "Route unclear or high-impact cases to a human reviewer for final sign-off.",
  },
];

export const TRADING_AGENT_DATA = [
  {
    title: "Signal Agent",
    description:
      "Monitors market conditions and synthesizes signals from pricing, volatility, and event-driven changes.",
    metrics: ["Trend detection", "Volatility scan", "Signal confidence"],
    tone: "orange" as const,
  },
  {
    title: "News Agent",
    description:
      "Summarizes major headlines, event context, and potential implications for a portfolio or strategy.",
    metrics: ["Headline clustering", "Narrative scoring", "Impact review"],
    tone: "wine" as const,
  },
  {
    title: "Risk Monitor",
    description:
      "Tracks exposure, policy constraints, and emerging risk across active positions and workflows.",
    metrics: ["Exposure checks", "Capital limits", "Alert routing"],
    tone: "smoke" as const,
  },
];

export const MARKET_INTELLIGENCE_ITEMS = [
  {
    kicker: "Data",
    title: "Connected inputs",
    description:
      "Market feeds, filings, and news are combined into a consistent analytical context.",
  },
  {
    kicker: "Models",
    title: "AI reasoning",
    description:
      "Large language models and signal models provide interpretation and synthesis across sources.",
  },
  {
    kicker: "Controls",
    title: "Governed actions",
    description:
      "Rules, validation, and human oversight ensure outputs remain explainable and compliant.",
  },
  {
    kicker: "Traceability",
    title: "Source-linked outputs",
    description:
      "Every insight can be linked back to the information and steps used to generate it.",
  },
];

export const AI_ROADMAP = [
  {
    id: "01",
    title: "Research workspaces",
    description:
      "A planned environment for reviewing structured context, source material, and analytical notes.",
    status: "Exploring",
  },
  {
    id: "02",
    title: "Governed automations",
    description:
      "Future workflow tooling designed around explicit policies, approvals, and clear human control.",
    status: "Planned",
  },
  {
    id: "03",
    title: "Personalized intelligence",
    description:
      "A coming-soon vision for interfaces that adapt presentation and context to defined user preferences.",
    status: "Future",
  },
];
