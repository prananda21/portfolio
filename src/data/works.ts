import type { Work } from "@/types/work";

export const WORKS: Work[] = [
  {
    slug: "backend-developer-baliola",
    title: "Backend Developer",
    company: "Baliola",
    type: "Full-time",
    location: "Bali",
    startDate: "July 2024",
    endDate: "Present",
    description: [
      "Build REST APIs that integrate to Polkadot/Substrate nodes (JSON-RPC, WebSocket) and to EVM chains via Ethers.js , Handle SCALE encoding/decoding, smart contract calls, transaction signing, gas estimation and receipt tracking on the APIs.",
      "Collaborates with Front End and Blockchain Developer including defining API specs and mock data, integrating API with Front End App, and defining smart contracts requirements with blockchain.",
      "Ensure security and performance on backend services including implementations of authentication (JWT/OAuth), rate-limiting, input validation, cache, and monitoring for unhandled error.",
    ],
    skills: ["Typescript", "Hono", "Bun", "Node.js", "Agile Methodologies"],
  },
];
