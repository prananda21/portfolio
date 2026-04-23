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
];

export const featuresProjects = PROJECTS.filter((project) => project.features);

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);
