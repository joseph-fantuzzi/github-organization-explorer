import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer Component Tests", () => {
  test("footer component renders properly", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
  });

  test("footer component includes correct text", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const text = screen.getByText(
      "Designed and Created By Joseph Fantuzzi 2023"
    );
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
    expect(text).toBeTruthy();
  });
});
