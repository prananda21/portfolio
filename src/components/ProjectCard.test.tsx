import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard", () => {
  it("links to the project detail route", () => {
    const project = PROJECTS[0];

    render(
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /view details for uniconv/i }),
    ).toHaveAttribute("href", `/projects/${project.slug}`);
  });

  it("opens the project detail route when the card body is clicked", async () => {
    const user = userEvent.setup();
    const project = PROJECTS[0];

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<ProjectCard project={project} />} />
          <Route path="/projects/:slug" element={<h1>Project opened</h1>} />
        </Routes>
      </MemoryRouter>,
    );

    await user.click(screen.getByText(project.summary));

    expect(
      screen.getByRole("heading", { name: /project opened/i }),
    ).toBeInTheDocument();
  });

  it("renders external access links for the project", () => {
    const project = PROJECTS[0];

    render(
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /access uniconv/i }),
    ).toHaveAttribute("href", project.links[0].href);
  });
});
