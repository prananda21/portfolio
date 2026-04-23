export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  year: string;
  status: "Concept" | "In Progress" | "Completed";
  features: boolean;
  links: ProjectLink[];
  highlights: string[];
  lessons: string[];
};
