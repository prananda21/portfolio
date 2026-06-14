import type { Project, ProjectLink } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    slug: "uniconv",
    title: "Uniconv",
    summary:
      "A CLI based project for universal data conversion, showcasing mathematical thinking for data transformation in length and degree units.",
    description:
      "A fast, accurate, and easy-to-use command-line unit converter built with Rust. UniConv supports temperature and length conversions with automatic unit detection, multiple input formats, and comprehensive error handling.",
    role: "Backend Developer",
    stack: ["Rust", "CLI"],
    year: "2026",
    status: "Completed",
    features: true,
    links: [
      { label: "Uniconv", href: "https://github.com/prananda21/uniconv" },
    ] satisfies ProjectLink[],
    highlights: [
      "Designed CLI based program to convert between length and degree units",
      "Temperature Conversion: Celsius, Fahrenheit, and Kelvin with proper symbols (°C, °F, K)",
      "Length Conversion: Centimeters, Inches, Kilometers, and Miles",
      "Automatic Unit Detection: No need to specify conversion type - automatically detects temperature vs length",
      "Multiple Command Formats: Dedicated subcommands and intelligent generic converter",
    ],
    lessons: [
      "Learned how to model unit conversion rules with clear and predictable logic",
      "Practiced Rust error handling for invalid input, unsupported units, and ambiguous commands",
      "Improved CLI design by supporting multiple command formats without making usage confusing",
      "Learned to separate parsing, validation, and conversion so the code stays easier to maintain",
    ],
  },
  {
    slug: "keynest",
    title: "Keynest",
    summary:
      "A multi-tenant secrets management platform for securely organizing application credentials across teams, projects, and environments.",
    description:
      "Keynest centralizes API keys, service credentials, and environment secrets as encrypted, versioned resources. It provides organization- and project-scoped access control, service tokens for machine access, and audit logs for tracing sensitive operations.",
    role: "Full-stack Developer",
    stack: [
      "TypeScript",
      "Bun",
      "Elysia",
      "PostgreSQL",
      "Drizzle",
      "Next.js",
      "Redis",
      "Docker",
      "React",
      "Fumapress",
    ],
    year: "2026",
    status: "In Progress",
    features: true,
    links: [
      {
        label: "Documentation",
        href: "https://landing-production-8c67.up.railway.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/prananda21/keynest",
      },
    ] satisfies ProjectLink[],
    highlights: [
      "Designed a multi-tenant hierarchy covering organizations, members, projects, environments, secrets, service tokens, and audit logs.",
      "Implemented email and password authentication with JWT bearer tokens, Argon2id password hashing, and organization- and project-level role enforcement.",
      "Modeled secrets as encrypted, versioned resources with environment-specific values, ownership metadata, expiration details, and audit history.",
      "Added hashed, project-scoped service tokens for machine and API access without reusing human authentication credentials.",
      "Established PostgreSQL persistence, request validation, and Redis-ready infrastructure while developing the API contract before the frontend.",
    ],
    lessons: [
      "Define backend contracts and security boundaries before building user-facing workflows that depend on them.",
      "Model tenant ownership and authorization explicitly at both organization and project levels.",
      "Treat sensitive configuration as versioned and auditable resources instead of unmanaged text values.",
      "Separate human authentication from machine access by using purpose-built, scoped service tokens.",
    ],
  },
  {
    slug: "e.id",
    title: "e.id",
    summary:
      "A digital identity platform maintained and improved for reliable production use.",
    description:
      "Contributed as a backend maintainer after the platform's initial development, focusing on optimizing authentication behavior, resolving production defects, and improving the reliability of existing backend services.",
    role: "Backend Developer / Maintainer",
    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "Docker",
    ],
    year: "2025",
    status: "Completed",
    features: true,
    links: [
      {
        label: "e.id platform",
        href: "https://e.id/",
      },
    ] satisfies ProjectLink[],
    highlights: [
      "Maintained an existing production backend and worked within established architecture, data models, and API contracts.",
      "Reviewed and optimized the authentication mechanism as the platform evolved beyond its initial development phase.",
      "Investigated and fixed backend defects discovered during production use, reducing failures in existing user workflows.",
      "Improved service reliability through targeted fixes across API logic, database operations, caching, and containerized runtime behavior.",
      "Validated maintenance changes against existing functionality to reduce regressions in a production-ready system.",
    ],
    lessons: [
      "Production maintenance requires understanding existing behavior and constraints before changing authentication or shared backend logic.",
      "Authentication improvements must preserve compatibility with active user flows while tightening reliability and security.",
      "Effective bug fixing starts with reproducing the failure, tracing its root cause, and verifying adjacent workflows for regressions.",
      "Small, focused changes are safer than broad refactors when maintaining a system that is already serving users.",
    ],
  },
];

export const featuresProjects = PROJECTS.filter((project) => project.features);

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);
