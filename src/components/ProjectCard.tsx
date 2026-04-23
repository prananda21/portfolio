import type { Project } from "@/types/project";
import { Link } from "react-router-dom";

type ProjectProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectProps) {
  return (
    <Link className="project-card" to={`/project/${project.slug}`}>
      <p className="eyebrow">
        {project.year} / {project.status}
      </p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <li className="tag" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}
