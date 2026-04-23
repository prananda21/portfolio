import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/data/projects";
import { ProjectDetail } from "./ProjectDetail";

function renderProjectRoute(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("ProjectDetail", () => {
  it("renders a known project from its slug", () => {
    const project = PROJECTS[0];

    renderProjectRoute(`/projects/${project.slug}`);

    expect(
      screen.getByRole("heading", { name: project.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(project.role)).toBeInTheDocument();
  });

  it("renders a not-found state for an unknown slug", () => {
    renderProjectRoute("/projects/missing-project");

    expect(
      screen.getByRole("heading", { name: /project not found/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /back to projects/i }),
    ).toHaveAttribute("href", "/projects");
  });
});
