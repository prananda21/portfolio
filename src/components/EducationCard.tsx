import type { Education } from "@/types/education";
import { TechIcon } from "./TechIcon";

type EducationCardProps = {
  education: Education;
};

export function EducationCard({ education }: EducationCardProps) {
  const dateRange = education.endDate
    ? `${education.startDate} - ${education.endDate}`
    : education.startDate;

  return (
    <article className="education-card">
      <div className="education-card-header">
        <p className="eyebrow">{dateRange}</p>
        <span className="education-institution">{education.institution}</span>
      </div>

      <div className="education-card-copy">
        <h3>{education.title}</h3>
        <p className="education-field">{education.fieldOfStudy}</p>
      </div>

      <div className="education-description">
        {education.description.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </div>

      <ul className="tag-list" aria-label={`${education.title} skills`}>
        {education.skills.map((skill) => (
          <li className="tag" key={skill}>
            <TechIcon name={skill} />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
