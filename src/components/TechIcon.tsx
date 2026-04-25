import {
  Blocks,
  Braces,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  Globe2,
  Hammer,
  Headphones,
  KeyRound,
  Leaf,
  Map,
  MonitorCog,
  NotebookTabs,
  Pickaxe,
  PlaneTakeoff,
  ScrollText,
  Server,
  ShieldCheck,
  Smartphone,
  Sprout,
  Terminal,
  TestTube2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ReactElement, SVGProps } from "react";
import {
  SiBun,
  SiCss,
  SiDocker,
  SiEthereum,
  SiExpress,
  SiGit,
  SiGithub,
  SiGmail,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRust,
  SiSentry,
  SiSwift,
  SiTypescript,
  SiVite,
  type IconType as SimpleIcon,
} from "@icons-pack/react-simple-icons";

const simpleIconMap: Record<string, SimpleIcon> = {
  bun: SiBun,
  cli: SiRust,
  "cloud services (aws, gcp)": SiGooglecloud,
  "containerization (docker)": SiDocker,
  css: SiCss,
  docker: SiDocker,
  email: SiGmail,
  "express.js": SiExpress,
  git: SiGit,
  github: SiGithub,
  go: SiGo,
  html: SiHtml5,
  javascript: SiJavascript,
  "node.js": SiNodedotjs,
  postgresql: SiPostgresql,
  react: SiReact,
  "background task management (redis)": SiRedis,
  rust: SiRust,
  "monitoring and logging (sentry)": SiSentry,
  swift: SiSwift,
  "swift fundamentals": SiSwift,
  typescript: SiTypescript,
  vite: SiVite,
  "blockchain integration (via smart contract - viem/ethers library)":
    SiEthereum,
};

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 10.4V16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M8 8.1V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.3"
      />
      <path
        d="M11.5 16V10.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M11.5 12.6C12.2 11.5 13 10.3 14.6 10.3C16.2 10.3 17 11.4 17 13.3V16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const customIconMap: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  linkedin: LinkedInIcon,
};

const lucideIconMap: Record<string, LucideIcon> = {
  "api design": Server,
  "authentication basics": ShieldCheck,
  "blockchain integration (via smart contract - viem/ethers library)": Blocks,
  blockchain: Blocks,
  "cloud services (aws, gcp)": Cloud,
  cli: Terminal,
  concurrency: Workflow,
  css: Code2,
  "customer service": Headphones,
  "data caching strategies": Database,
  "data analysis": Database,
  "data modeling": Database,
  "database management": Database,
  "dapp development": Blocks,
  "environmental science": Leaf,
  execution: PlaneTakeoff,
  "error handling": ShieldCheck,
  "functional programming": Workflow,
  gis: Map,
  go: Braces,
  html: Globe2,
  horticulture: Sprout,
  "ios development": Smartphone,
  "javascript programming": Code2,
  "memory safety": ShieldCheck,
  "mobile product thinking": Smartphone,
  "node.js": Server,
  orm: Database,
  "package managers": Hammer,
  planning: NotebookTabs,
  "plant protection": ShieldCheck,
  polkadot: Blocks,
  "project management": ScrollText,
  react: Code2,
  "research methodology": FlaskConical,
  "responsive layouts": MonitorCog,
  "rest apis": Server,
  "restful api": Server,
  rust: Braces,
  "rust programming": Braces,
  scrum: Workflow,
  "service logic": Workflow,
  "soil science": Pickaxe,
  "substrate": Blocks,
  "systems programming": Terminal,
  swift: Smartphone,
  "swift fundamentals": Smartphone,
  terminal: Terminal,
  "testing and debugging techniques": TestTube2,
  "technical support": Headphones,
  troubleshooting: TestTube2,
  "type safety": ShieldCheck,
  "typescript programming": Braces,
  agile: Workflow,
  "agricultural biotechnology": Sprout,
  agronomy: Sprout,
  "authentication and authorization": KeyRound,
  monitoring: MonitorCog,
  "object-oriented programming": Blocks,
};

type TechIconProps = {
  name: string;
};

export function TechIcon({ name }: TechIconProps) {
  const normalizedName = name.toLowerCase();
  const CustomIconComponent = customIconMap[normalizedName];

  if (CustomIconComponent) {
    return (
      <CustomIconComponent
        aria-label={`${name} icon`}
        className="tech-icon tech-icon--custom"
        focusable="false"
      />
    );
  }

  const SimpleIconComponent = simpleIconMap[normalizedName];

  if (SimpleIconComponent) {
    return (
      <SimpleIconComponent
        aria-label={`${name} icon`}
        className="tech-icon tech-icon--brand"
        color="currentColor"
        focusable="false"
      />
    );
  }

  const Icon = lucideIconMap[normalizedName] ?? Code2;

  return (
    <Icon
      aria-label={`${name} icon`}
      className="tech-icon"
      focusable="false"
      strokeWidth={1.75}
    />
  );
}
