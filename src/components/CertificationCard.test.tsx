import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CERTIFICATIONS } from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";

describe("CertificationCard", () => {
  it("renders certification details and its external credential link", () => {
    const certification = CERTIFICATIONS[0];

    render(<CertificationCard certification={certification} />);

    expect(
      screen.getByRole("heading", { name: certification.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(certification.issuer)).toBeInTheDocument();
    expect(screen.getByText(certification.issueDate)).toBeInTheDocument();
    expect(screen.getByText(certification.skills[0])).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: `Open certificate for ${certification.title}`,
      }),
    ).toHaveAttribute("href", certification.links.href);
  });
});
