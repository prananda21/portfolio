import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">/projects</p>
        <h1 className="page-title">Project archive</h1>
        <p className="lede">
          Three featured projects for now. This page is built to grow as more
          backend, frontend, and mobile work gets added.
        </p>
      </section>

      <section className="grid" aria-label="Project list">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
