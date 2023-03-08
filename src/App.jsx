import { useState } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "https://api.github.com";

function App() {
  const [repos, setRepos] = useState([]);
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
        if (response.data.length === 0)
          setErrorMessage("Organization is private");
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
    <div className="text-center py-5">
      <h1 className="text-2xl">GitHub Organization Explorer</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          className="border-2"
        />
        <button className="border-2">Search</button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
      <div>
        {sortedRepos.map((repo, i) => {
          return (
            <div key={i} className="p-5 border-2 w-7/12 mx-auto">
              <h1 className="text-xl underline">{repo.name}</h1>
              <p>{repo.language}</p>
              <p>{repo.description}</p>
              <p>Star Count: {repo.stargazers_count}</p>
              <p>Fork Count: {repo.forks_count}</p>
              <p>Date Created: {repo.created_at}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
