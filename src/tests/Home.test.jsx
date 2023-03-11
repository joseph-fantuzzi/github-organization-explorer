import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
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
});
