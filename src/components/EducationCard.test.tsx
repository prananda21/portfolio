import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EDUCATIONS } from "@/data/educations";
import { EducationCard } from "./EducationCard";

describe("EducationCard", () => {
  it("renders education details with each description paragraph", () => {
    const education = EDUCATIONS[0];

    render(<EducationCard education={education} />);

    expect(
      screen.getByRole("heading", { name: education.title }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(education.institution)).toHaveLength(2);
    expect(screen.getByText(education.fieldOfStudy)).toBeInTheDocument();
    expect(screen.getByText(education.description[0])).toBeInTheDocument();
    expect(screen.getByText(education.description[1])).toBeInTheDocument();
    expect(screen.getByText(education.skills[0])).toBeInTheDocument();
  });
});
