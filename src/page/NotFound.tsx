import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">/404</p>
        <h1 className="page-title">Signal lost</h1>
        <p className="lede">This route does not exist in the archive.</p>
        <Link className="inline-link" to="/">
          return home
        </Link>
      </section>
    </div>
  );
}
