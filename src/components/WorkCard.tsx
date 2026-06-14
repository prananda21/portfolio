import type { Work } from "@/types/work";
import { TechIcon } from "./TechIcon";

type WorkCardProps = {
  work: Work;
};

export function WorkCard({ work }: WorkCardProps) {
  const dateRange = work.endDate
    ? `${work.startDate} - ${work.endDate}`
    : work.startDate;

  return (
    <article className="work-card">
      <div className="work-card-header">
        <p className="eyebrow">{dateRange}</p>
        <span className="work-company">{work.company}</span>
      </div>

      <div className="work-card-copy">
        <h3>{work.title}</h3>
        <div className="work-meta" aria-label={`${work.title} work details`}>
          <span>{work.type}</span>
          <span>{work.location}</span>
        </div>
      </div>

      <div className="work-description">
        {work.description.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </div>

      <ul className="tag-list" aria-label={`${work.title} skills`}>
        {work.skills.map((skill) => (
          <li className="tag" key={skill}>
            <TechIcon name={skill} />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
