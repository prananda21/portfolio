import { describe, expect, it } from "vitest";
import { featuresProjects, getProjectBySlug, PROJECTS } from "./projects";

describe("projects data", () => {
  it("exposes exactly one featured projects", () => {
    expect(featuresProjects).toHaveLength(1);
  });

  it("finds a project by slug", () => {
    expect(getProjectBySlug(PROJECTS[0].slug)?.title).toBe(PROJECTS[0].title);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("missing-project")).toBeUndefined();
  });
});
