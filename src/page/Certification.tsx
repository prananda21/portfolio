import { CertificationCard } from "@/components/CertificationCard";
import { CERTIFICATIONS } from "@/data/certifications";

export function Certifications() {
  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">/certifications</p>
        <h1 className="page-title">Certification archive</h1>
        <p className="lede">
          A record of structured learning across backend foundations,
          blockchain systems, Rust, TypeScript, support operations, and project
          delivery.
        </p>
      </section>

      <section className="grid" aria-label="Certification list">
        {CERTIFICATIONS.map((certification) => (
          <CertificationCard
            certification={certification}
            key={certification.slug}
          />
        ))}
      </section>
    </div>
  );
}
