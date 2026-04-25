import { WorkCard } from "@/components/WorkCard";
import { WORKS } from "@/data/works";

export function Experiences() {
  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">/experience</p>
        <h1 className="page-title">Experience archive</h1>
        <p className="lede">
          Backend-focused work across API design, blockchain integrations,
          service security, and collaboration with frontend and smart contract
          teams.
        </p>
      </section>

      <section className="archive-list" aria-label="Experience list">
        {WORKS.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </section>
    </div>
  );
}
