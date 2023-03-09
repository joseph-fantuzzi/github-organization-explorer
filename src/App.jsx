import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Commits from "./components/Commits";
import "./App.css";

const BASE_URL = "https://api.github.com";

function App() {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [currentOrganization, setCurrentOrganization] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Sets the search value state to the value within the input
   * @param {*} e
   */
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  /**
   * Sends a get request to github api to retrieve repo data for that organization
   * @param {*} e
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      if (searchValue) {
        const response = await axios.get(
          `${BASE_URL}/orgs/${searchValue}/repos`
        );
        setRepos(response.data);
        if (response.data.length === 0) {
          setErrorMessage("Organization is private");
        } else {
          setCurrentOrganization(searchValue);
        }
        setSearchValue("");
      }
    } catch (err) {
      setRepos([]);
      setErrorMessage("Organization not found");
      console.error(err);
    }
  };

  //sorts organization's repos by star count in descending order
  const sortedRepos = repos.sort((a, b) => {
    if (a.stargazers_count < b.stargazers_count) return 1;
    if (a.stargazers_count > b.stargazers_count) return -1;
    return 0;
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            sortedRepos={sortedRepos}
            searchValue={searchValue}
            handleSearchChange={handleSearchChange}
            handleFormSubmit={handleFormSubmit}
            errorMessage={errorMessage}
          />
        }
      />
      <Route
        path="/:repoName"
        element={
          <Commits
            commits={commits}
            setCommits={setCommits}
            currentOrganization={currentOrganization}
            BASE_URL={BASE_URL}
          />
        }
      />
    </Routes>
  );
}

export default App;
