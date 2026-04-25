import type { Certification } from "@/types/certification";
import { TechIcon } from "./TechIcon";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const dateRange = certification.expirationDate
    ? `${certification.issueDate} - ${certification.expirationDate}`
    : certification.issueDate;

  return (
    <article className="certification-card">
      <div className="certification-card-header">
        <p className="eyebrow">{dateRange}</p>
        <span className="certification-issuer">{certification.issuer}</span>
      </div>

      <div className="certification-card-copy">
        <h3>{certification.title}</h3>
        <p>{certification.description}</p>
      </div>

      <ul className="tag-list" aria-label={`${certification.title} skills`}>
        {certification.skills.map((skill) => (
          <li className="tag" key={skill}>
            <TechIcon name={skill} />
            {skill}
          </li>
        ))}
      </ul>

      <a
        aria-label={`Open certificate for ${certification.title}`}
        className="project-access-link"
        href={certification.links.href}
        rel="noreferrer"
        target="_blank"
      >
        {certification.links.label}
      </a>
    </article>
  );
}
