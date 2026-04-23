import type { SkillGroup } from "@/types/skills";

export const SKILLS: SkillGroup[] = [
  {
    title: "Backend",
    detail: "The main direction.",
    items: [
      "API design",
      "Service logic",
      "Data modeling",
      "Authentication basics",
      "Database management",
      "Cloud services (AWS, GCP)",
      "Containerization (Docker)",
      "Data caching strategies",
      "Background task management (Redis)",
      "Monitoring and logging (Sentry)",
      "Testing and debugging techniques",
      "Blockchain integration (via Smart Contract - Viem/Ethers Library)",
    ],
  },
  {
    title: "Frontend",
    detail: "Enough UI to expose the system clearly.",
    items: ["React", "Vite", "HTML", "CSS", "Responsive layouts"],
  },
  {
    title: "Languages",
    detail: "Primary and growing languages.",
    items: ["TypeScript", "JavaScript", "Rust", "Go", "Swift"],
  },
  {
    title: "Tools",
    detail: "Daily development workflow.",
    items: [
      "Git",
      "Node.js",
      "Bun",
      "REST APIs",
      "Terminal",
      "Package managers",
    ],
  },
  {
    title: "Mobile Interest",
    detail: "A future path worth exploring.",
    items: ["iOS development", "Swift fundamentals", "Mobile product thinking"],
  },
];
