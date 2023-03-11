import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";

describe("Home Component Tests", () => {
  test("home component renders properly", () => {
    render(
      <Router>
        <Home
          searchValue={""}
          handleSearchChange={vi.fn()}
          handleFormSubmit={vi.fn()}
          errorMessage={""}
          toggle={"light"}
          setToggle={vi.fn()}
        />
      </Router>
    );
  });

  test("home component includes correct text", () => {
    render(
      <Router>
        <Home
          searchValue={""}
          handleSearchChange={vi.fn()}
          handleFormSubmit={vi.fn()}
          errorMessage={""}
          toggle={"light"}
          setToggle={vi.fn()}
        />
      </Router>
    );
    expect(
      screen.getByText("GitHub Organization Explorer")
    ).toBeInTheDocument();
  });

  test("home component input can have text", () => {
    render(
      <Router>
        <Home
          searchValue={"Netflix"}
          handleSearchChange={vi.fn()}
          handleFormSubmit={vi.fn()}
          errorMessage={""}
          toggle={"light"}
          setToggle={vi.fn()}
        />
      </Router>
    );
    const input = screen.getByTestId("home-input");
    expect(input).toHaveValue("Netflix");
  });

  test("home component error message displays properly", () => {
    render(
      <Router>
        <Home
          searchValue={""}
          handleSearchChange={vi.fn()}
          handleFormSubmit={vi.fn()}
          errorMessage={"Please provide an organization name above"}
          toggle={"light"}
          setToggle={vi.fn()}
        />
      </Router>
    );
    const errorMessage = screen.getByText(
      "Please provide an organization name above"
    );
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeTruthy();
    expect(errorMessage).toBeVisible();
  });

  test("home component button works properly", () => {
    render(
      <Router>
        <Home
          searchValue={"Netflix"}
          handleSearchChange={vi.fn()}
          handleFormSubmit={vi.fn()}
          errorMessage={""}
          toggle={"light"}
          setToggle={vi.fn()}
        />
      </Router>
    );
    const btn = screen.getByTestId("home-btn");
    fireEvent.click(btn);
  });
});
