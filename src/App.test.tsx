import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { PROFILE } from "@/data/profile";
import App from "./App";

describe("App routes", () => {
  it("renders the home page at the root route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: PROFILE.title }),
    ).toBeInTheDocument();
  });

  it("renders the project index route", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /project archive/i }),
    ).toBeInTheDocument();
  });

  it("renders the certification index route", () => {
    render(
      <MemoryRouter initialEntries={["/certifications"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /certification archive/i }),
    ).toBeInTheDocument();
  });

  it("renders the education index route", () => {
    render(
      <MemoryRouter initialEntries={["/educations"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /education archive/i }),
    ).toBeInTheDocument();
  });

  it("renders the experience route", () => {
    render(
      <MemoryRouter initialEntries={["/experience"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /experience archive/i }),
    ).toBeInTheDocument();
  });

  it("renders the about route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /about prananda/i }),
    ).toBeInTheDocument();
  });

  it("renders the contact route", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /open a signal/i }),
    ).toBeInTheDocument();
  });
});
