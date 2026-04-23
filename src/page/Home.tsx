import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillGroup } from "@/components/SkillGroup";
import { TerminalLine } from "@/components/TerminalLine";
import { PROFILE } from "@/data/profile";
import { featuresProjects } from "@/data/projects";
import { SKILLS } from "@/data/skills";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="page page-stack">
      <section className="hero">
        <TerminalLine command="whoami" output={PROFILE.status} />
        <h1 className="hero-title">{PROFILE.title}</h1>
        <p className="lede">{PROFILE.intro}</p>
        <div className="detail-list" aria-label="Current profile signals">
          <div className="detail-item">
            <span className="detail-label">focus</span>
            <span className="detail-value">{PROFILE.focus}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">primary</span>
            <span className="detail-value">TypeScript</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">learning</span>
            <span className="detail-value">{PROFILE.learning.join(" / ")}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          kicker="01 / context"
          title="Backend first, UI when needed"
        />
        <div className="two-column">
          <div className="panel">
            <p>{PROFILE.about}</p>
          </div>
          <div className="panel">
            <ul className="plain-list">
              {PROFILE.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader kicker="02 / stack" title="Skills in the dark" />
        <div className="grid">
          {SKILLS.slice(0, 3).map((group) => (
            <SkillGroup group={group} key={group.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader kicker="03 / evidence" title="Featured projects" />
        <div className="grid">
          {featuresProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link className="inline-link" to="/projects">
          view project archive
        </Link>
      </section>
    </div>
  );
}
