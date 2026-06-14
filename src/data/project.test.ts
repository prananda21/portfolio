import { describe, expect, it } from "vitest";
import { featuresProjects, getProjectBySlug, PROJECTS } from "./projects";

describe("projects data", () => {
  it("exposes projects marked as featured", () => {
    expect(featuresProjects.every((project) => project.features)).toBe(true);
    expect(featuresProjects.some((project) => project.slug === "keynest")).toBe(
      true,
    );
  });

  it("finds a project by slug", () => {
    expect(getProjectBySlug(PROJECTS[0].slug)?.title).toBe(PROJECTS[0].title);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("missing-project")).toBeUndefined();
  });
});
