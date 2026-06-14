import { EducationCard } from "@/components/EducationCard";
import { EDUCATIONS } from "@/data/educations";

export function Educations() {
  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">/educations</p>
        <h1 className="page-title">Education archive</h1>
        <p className="lede">
          A record of academic paths and structured training that shaped my
          backend foundation, blockchain direction, and problem-solving habits.
        </p>
      </section>

      <section className="archive-list" aria-label="Education list">
        {EDUCATIONS.map((education) => (
          <EducationCard education={education} key={education.slug} />
        ))}
      </section>
    </div>
  );
}
