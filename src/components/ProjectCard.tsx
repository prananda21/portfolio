import type { KeyboardEvent, MouseEvent } from "react";
import type { Project } from "@/types/project";
import { Link, useNavigate } from "react-router-dom";
import { TechIcon } from "./TechIcon";

type ProjectProps = {
  project: Project;
};

function isLinkTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && target.closest("a");
}

export function ProjectCard({ project }: ProjectProps) {
  const navigate = useNavigate();
  const projectPath = `/projects/${project.slug}`;

  function openProject() {
    navigate(projectPath);
  }

  function handleCardClick(event: MouseEvent<HTMLElement>) {
    if (isLinkTarget(event.target)) {
      return;
    }

    openProject();
  }

  function handleCardKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (isLinkTarget(event.target)) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  }

  return (
    <article
      aria-label={`Open project card for ${project.title}`}
      className="project-card"
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
    >
      <p className="eyebrow">
        {project.year} / {project.status}
      </p>
      <Link
        aria-label={`View details for ${project.title}`}
        className="project-card-title-link"
        to={projectPath}
      >
        <h3>{project.title}</h3>
      </Link>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <li className="tag" key={item}>
            <TechIcon name={item} />
            {item}
          </li>
        ))}
      </ul>
      {project.links.length > 0 ? (
        <div
          className="project-card-links"
          aria-label={`${project.title} links`}
        >
          {project.links.map((link) => (
            <a
              aria-label={`Access ${link.label}`}
              className="project-access-link"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              Access here: {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
