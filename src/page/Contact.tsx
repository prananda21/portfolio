import { PROFILE } from "@/data/profile";

export function Contact() {
  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">/contact</p>
        <h1 className="page-title">Open a signal</h1>
        <p className="lede">
          Reach out for backend work, TypeScript projects, frontend
          collaboration, or a conversation about learning Rust, Go, and iOS.
        </p>
      </section>

      <section className="grid" aria-label="Contact links">
        {PROFILE.contactLinks.map((link) => (
          <a className="project-card" href={link.href} key={link.label}>
            <p className="eyebrow">signal</p>
            <h3>{link.label}</h3>
            <p>{link.href}</p>
          </a>
        ))}
      </section>
    </div>
  );
}
