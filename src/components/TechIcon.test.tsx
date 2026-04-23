import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TechIcon } from "./TechIcon";

describe("TechIcon", () => {
  it("renders a labeled monochrome icon for a known technology", () => {
    render(<TechIcon name="Rust" />);

    expect(screen.getByLabelText("Rust icon")).toBeInTheDocument();
  });

  it("falls back to a generic icon for an unknown technology", () => {
    render(<TechIcon name="Unknown Tool" />);

    expect(screen.getByLabelText("Unknown Tool icon")).toBeInTheDocument();
  });

  it("renders a contact icon for LinkedIn", () => {
    render(<TechIcon name="LinkedIn" />);

    expect(screen.getByLabelText("LinkedIn icon")).toBeInTheDocument();
  });
});
