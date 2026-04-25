import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WORKS } from "@/data/works";
import { WorkCard } from "./WorkCard";

describe("WorkCard", () => {
  it("renders work experience details with each responsibility paragraph", () => {
    const work = WORKS[0];

    render(<WorkCard work={work} />);

    expect(screen.getByRole("heading", { name: work.title })).toBeInTheDocument();
    expect(screen.getByText(work.company)).toBeInTheDocument();
    expect(screen.getByText(work.type)).toBeInTheDocument();
    expect(screen.getByText(work.location)).toBeInTheDocument();
    expect(screen.getByText(work.description[0])).toBeInTheDocument();
    expect(screen.getByText(work.description[1])).toBeInTheDocument();
    expect(screen.getByText(work.skills[0])).toBeInTheDocument();
  });
});
