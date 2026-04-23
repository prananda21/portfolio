import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
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

    expect(screen.getByRole("link", { name: /uniconv/i })).toHaveAttribute(
      "href",
      `/projects/${project.slug}`,
    );
  });
});
