import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar Component Tests", () => {
  test("navbar component renders properly", () => {
    render(
      <Router>
        <Navbar searchName={""} setSearchName={vi.fn()} repoList={true} />
      </Router>
    );
  });

  test("org navbar component renders title properly", () => {
    render(
      <Router>
        <Navbar searchName={""} setSearchName={vi.fn()} repoList={true} />
      </Router>
    );

    const title = screen.getByText("GitHub Organization Explorer");
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
    expect(title).toBeVisible();
  });

  test("org navbar component search input works", () => {
    render(
      <Router>
        <Navbar
          searchName={"Hystrix"}
          setSearchName={vi.fn()}
          repoList={true}
        />
      </Router>
    );

    const input = screen.getByTestId("nav-input");
    expect(input).toHaveValue("Hystrix");
  });

  test("org navbar component placeholder text is correct", () => {
    render(
      <Router>
        <Navbar searchName={""} setSearchName={vi.fn()} repoList={true} />
      </Router>
    );

    const input = screen.getByPlaceholderText("Search this organization...");
    expect(input).toBeInTheDocument();
  });

  test("repo navbar component renders title properly", () => {
    render(
      <Router>
        <Navbar searchName={""} setSearchName={vi.fn()} repoList={false} />
      </Router>
    );

    const title = screen.getByText("GitHub Organization Explorer");
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
    expect(title).toBeVisible();
  });

  test("repo navbar component search input works", () => {
    render(
      <Router>
        <Navbar
          searchName={"Hystrix"}
          setSearchName={vi.fn()}
          repoList={false}
        />
      </Router>
    );

    const input = screen.getByTestId("nav-input");
    expect(input).toHaveValue("Hystrix");
  });

  test("repo navbar component placeholder text is correct", () => {
    render(
      <Router>
        <Navbar searchName={""} setSearchName={vi.fn()} repoList={false} />
      </Router>
    );

    const input = screen.getByPlaceholderText("Search this repository...");
    expect(input).toBeInTheDocument();
  });
});
