import type { Profile } from "@/types/profile";

export const PROFILE: Profile = {
  name: "Prananda Yoga",
  title: "Backend Developer",
  location: "Indonesia",
  focus: "Backend systems, APIs, and practical web interfaces",
  status:
    "Good at Typescript and still exploring about Rust, Go, also iOS development",
  email: "pranandayoga21@gmail.com",
  intro:
    "Backend-focused developer working primarily with TypeScript. I like building APIs, modeling data flow, and creating frontend interfaces when the product needs a clear way to expose the system.",
  about:
    "A highly motivated Backend Developer with a passion for constructing efficient, scalable, and secure backend systems. Proficient in Node.js, Bun, Express.js, NestJS, and Modern Framework like Hono and ElysiaJS. Skilled in integrating backend services with PostgreSQL, Redis, MongoDB, and securely managing secrets using Vault.",
  values: [
    "Clear data flow",
    "Small maintainable modules",
    "Readable APIs",
    "Interfaces that reveal how the system works",
  ],
  learning: ["Rust", "Go", "Swift", "iOS development"],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:pranandayoga21@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/prananda21",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/prnd-yoga",
    },
  ],
};
