import type { Profile } from "@/types/profile";

export const PROFILE: Profile = {
  name: "Prananda Yoga",
  title: "Backend Developer",
  location: "Indonesia",
  focus: "Backend systems, APIs, and practical web interfaces",
  status: "Learning Rust, Go, and iOS development",
  email: "pranandayoga21@gmail.com",
  intro:
    "Backend-focused developer working primarily with TypeScript. I like building APIs, modeling data flow, and creating frontend interfaces when the product needs a clear way to expose the system.",
  about:
    "I am strongest around backend thinking: services, data shape, API contracts, and the logic that keeps an application understandable. I can work on frontend when needed, especially with React and TypeScript, and I am steadily learning Rust, Go, and iOS development to broaden the kinds of systems I can build.",
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
