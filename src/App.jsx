import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Repo from "./components/Repo";
import Organization from "./components/Organization";
import "./App.css";

const BASE_URL = "https://api.github.com";

function App() {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [orgNotFound, setOrgNotFound] = useState(false);
  const [repoNotFound, setRepoNotFound] = useState(false);
  const [zeroRepos, setZeroRepos] = useState(false);
  const [zeroCommits, setZeroCommits] = useState(false);

  const navigate = useNavigate();

  /**
   * Sets the search value state to the value within the input
   * @param {*} e
   */
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  /**
   * Navigates the user to the specified organization route if a search value is specified
   * @param {*} e
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (searchValue) {
      setRepoNotFound(false);
      setOrgNotFound(false);
      setZeroRepos(false);
      setZeroCommits(false);
      navigate(`/${searchValue}`);
      setSearchValue("");
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            searchValue={searchValue}
            handleSearchChange={handleSearchChange}
            handleFormSubmit={handleFormSubmit}
          />
        }
      />
      <Route
        path="/:orgName"
        element={
          <Organization
            BASE_URL={BASE_URL}
            repos={repos}
            setRepos={setRepos}
            orgNotFound={orgNotFound}
            setOrgNotFound={setOrgNotFound}
            zeroRepos={zeroRepos}
            setZeroRepos={setZeroRepos}
          />
        }
      />
      <Route
        path="/:orgName/:repoName"
        element={
          <Repo
            commits={commits}
            setCommits={setCommits}
            BASE_URL={BASE_URL}
            repoNotFound={repoNotFound}
            setRepoNotFound={setRepoNotFound}
            zeroCommits={zeroCommits}
            setZeroCommits={setZeroCommits}
          />
        }
      />
    </Routes>
  );
}

export default App;
