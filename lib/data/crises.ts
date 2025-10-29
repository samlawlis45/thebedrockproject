export interface Crisis {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export const crises: Crisis[] = [
  {
    id: "energy",
    number: "01",
    title: "Energy System Crisis",
    description: "Civilization's foundation is crumbling as renewable curtailment surges while AI demands exponential power.",
    icon: "⚡",
    stats: [
      { value: "2,400", label: "Renewable Curtailment (CA 2023)" },
      { value: "437%", label: "AI Energy Growth by 2030" }
    ]
  },
  {
    id: "ai",
    number: "02",
    title: "AI Alignment Crisis",
    description: "We're deploying intelligences we cannot control, understand, or stop from optimizing for catastrophic objectives.",
    icon: "🤖",
    stats: [
      { value: "1T+", label: "GPT-4 Parameters" },
      { value: "5.85B", label: "Training Data Sources" }
    ]
  },
  {
    id: "social",
    number: "03",
    title: "Social Fabric Crisis",
    description: "Trust in institutions has collapsed while social isolation reaches epidemic levels and meaning disappears.",
    icon: "👥",
    stats: [
      { value: "23%", label: "Trust in Government" },
      { value: "61%", label: "Americans Feeling Lonely" }
    ]
  },
  {
    id: "economic",
    number: "04",
    title: "Economic Crisis",
    description: "The post-WWII promise of prosperity through work has collapsed into wage stagnation and impossible housing.",
    icon: "💰",
    stats: [
      { value: "399:1", label: "CEO-to-Worker Pay Ratio" },
      { value: "5.0x", label: "Home Price-to-Income" }
    ]
  },
  {
    id: "epistemic",
    number: "05",
    title: "Epistemic Crisis",
    description: "We're losing the ability to distinguish truth from fiction—and to verify what actually happened in history.",
    icon: "🌐",
    stats: [
      { value: "49.6%", label: "Internet Traffic (Bots)" },
      { value: "32%", label: "Trust in Media" }
    ]
  }
];
