import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "../components/Error";

describe("Error Component Tests", () => {
  test("error component renders properly", () => {
    render(
      <Router>
        <Error notFound={true} privateRepos={null} noCommits={null} />
      </Router>
    );
  });

  test("error component 404 page displays correct information", () => {
    render(
      <Router>
        <Error notFound={true} privateRepos={null} noCommits={null} />
      </Router>
    );

    const text = screen.getByText("This page does not exist");
    expect(text).toBeInTheDocument();
    expect(text).toBeTruthy();
    expect(text).toBeVisible();
  });

  test("error component 404 page button works properly", () => {
    render(
      <Router>
        <Error notFound={true} privateRepos={null} noCommits={null} />
      </Router>
    );

    const btn = screen.getByTestId("error-btn");
    fireEvent.click(btn);
  });

  test("error component organization with private repos displays correct information", () => {
    render(
      <Router>
        <Error notFound={null} privateRepos={true} noCommits={null} />
      </Router>
    );

    const text = screen.getByText(
      "This organization must have all private repositories or simply has none"
    );
    expect(text).toBeInTheDocument();
    expect(text).toBeTruthy();
    expect(text).toBeVisible();
  });

  test("error component unknown organization displays correct information", () => {
    render(
      <Router>
        <Error notFound={null} privateRepos={false} noCommits={null} />
      </Router>
    );

    const text = screen.getByText("This organization does not exist");
    expect(text).toBeInTheDocument();
    expect(text).toBeTruthy();
    expect(text).toBeVisible();
  });

  test("error component no commits for a given repo displays correct information", () => {
    render(
      <Router>
        <Error notFound={null} privateRepos={null} noCommits={true} />
      </Router>
    );

    const text = screen.getByText("This repository has no commits");
    expect(text).toBeInTheDocument();
    expect(text).toBeTruthy();
    expect(text).toBeVisible();
  });

  test("error component unknown repo for a given organization displays correct information", () => {
    render(
      <Router>
        <Error notFound={null} privateRepos={null} noCommits={false} />
      </Router>
    );

    const text = screen.getByText("This repository does not exist");
    expect(text).toBeInTheDocument();
    expect(text).toBeTruthy();
    expect(text).toBeVisible();
  });
});
