import { getProjectBySlug } from "@/data/projects";
import { Link, useParams } from "react-router-dom";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="page page-stack">
        <section className="section">
          <p className="eyebrow">/projects/unknown</p>
          <h1 className="page-title">Project not found</h1>
          <p className="lede">The requested entry is not in the archive yet.</p>
          <Link className="inline-link" to="/projects">
            back to projects
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">
          /projects/{project.slug} / {project.status}
        </p>
        <h1 className="page-title">{project.title}</h1>
        <p className="lede">{project.description}</p>
      </section>

      <section className="detail-list" aria-label="Project details">
        <div className="detail-item">
          <span className="detail-label">role</span>
          <span className="detail-value">{project.role}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">year</span>
          <span className="detail-value">{project.year}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">stack</span>
          <span className="detail-value">{project.stack.join(" / ")}</span>
        </div>
      </section>

      <section className="two-column">
        <article className="panel">
          <h2>Highlights</h2>
          <ul className="plain-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="panel">
          <h2>Lessons</h2>
          <ul className="plain-list">
            {project.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
