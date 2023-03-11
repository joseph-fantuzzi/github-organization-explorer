import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../components/Theme";

describe("Theme Component Tests", () => {
  test("theme component renders properly", () => {
    render(
      <Router>
        <Theme />
      </Router>
    );
  });

  test("theme component toggle works properly", () => {
    render(
      <Router>
        <Theme toggle={"light"} setToggle={vi.fn()} />
      </Router>
    );

    const toggle = screen.getByTestId("toggle");
    fireEvent.click(toggle);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  test("theme component toggle works the other way properly", () => {
    render(
      <Router>
        <Theme toggle={"dark"} setToggle={vi.fn()} />
      </Router>
    );

    const toggle = screen.getByTestId("toggle");
    fireEvent.click(toggle);
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
