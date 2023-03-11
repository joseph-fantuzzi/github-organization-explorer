import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Repo from "./components/Repo";
import Organization from "./components/Organization";
import Error from "./components/Error";
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
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState("light");

  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setToggle("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setToggle("light");
    }
  }, []);

  /**
   * Sets the search value state to the value within the input
   * @param {*} e
   */
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setErrorMessage("");
  };

  /**
   * Navigates the user to the specified organization route if a search value is specified
   * @param {*} e
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue) {
      setErrorMessage("Please provide an organization name above");
      return;
    }
    setRepoNotFound(false);
    setOrgNotFound(false);
    setZeroRepos(false);
    setZeroCommits(false);
    navigate(`/${searchValue.trim().toLowerCase()}`);
    setSearchValue("");
  };

  return (
    <div className="dark:bg-[#000000] theme-transition">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchValue={searchValue}
              handleSearchChange={handleSearchChange}
              handleFormSubmit={handleFormSubmit}
              errorMessage={errorMessage}
              toggle={toggle}
              setToggle={setToggle}
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
        <Route
          path="*"
          element={
            <div className="min-h-[100svh] flex items-center justify-center pb-20">
              <Error notFound={true} privateRepos={null} noCommits={null} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
