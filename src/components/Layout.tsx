import { PROFILE } from "@/data/profile";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "home", to: "/" },
  { label: "projects", to: "/projects" },
  { label: "experience", to: "/experience" },
  { label: "certifications", to: "/certifications" },
  { label: "educations", to: "/educations" },
  { label: "about", to: "/about" },
  { label: "contact", to: "/contact" },
];

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/">
          {PROFILE.name.toLowerCase()}.dev
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink className="nav-link" key={item.to} to={item.to}>
              /{item.to}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>{PROFILE.focus}</span>
        <NavLink className="inlink-link" to="/contact">
          open signal
        </NavLink>
      </footer>
    </div>
  );
}
