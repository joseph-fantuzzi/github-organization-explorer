import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Repo = ({
  commits,
  setCommits,
  BASE_URL,
  repoNotFound,
  setRepoNotFound,
  zeroCommits,
  setZeroCommits,
}) => {
  const { orgName, repoName } = useParams();

  const [searchCommitName, setSearchCommitName] = useState("");

  /**
   * On initial render, sends a get request to github api to retrieve commit data for that repo
   */
  useEffect(() => {
    const viewCommitList = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/repos/${orgName}/${repoName}/commits`
        );
        setCommits(response.data);
        if (response.data.length === 0) {
          setZeroCommits(true);
        }
      } catch (err) {
        setCommits([]);
        setRepoNotFound(true);
        console.error(err);
      }
    };
    viewCommitList();
  }, []);

  /**filters specfic repository's commits by search query from user
   * @returns filtered array
   */
  const filteredCommitSearch = () => {
    const sanitize = searchCommitName.trim().toLowerCase();
    if (!sanitize) return commits;
    return commits.filter((commit) => {
      return commit.commit.message.toLowerCase().includes(sanitize);
    });
  };

  return (
    <div className="w-11/12 max-w-6xl min-h-[100svh] md:w-3/4 mx-auto pt-5">
      <Navbar
        searchName={searchCommitName}
        setSearchName={setSearchCommitName}
        repoList={false}
      />
      {repoNotFound ? (
        <div>Repo Not Found</div>
      ) : zeroCommits ? (
        <div>This repository must be private or simply has no commits</div>
      ) : (
        filteredCommitSearch().map((commit, index) => {
          return (
            <div key={index} className="p-5 border-2 w-7/12 mx-auto">
              <h1>{commit.commit.message}</h1>
              <img
                src={commit.author?.avatar_url}
                className="rounded-full w-10 mx-auto"
              />
              <p>{commit.author?.login}</p>
              <p>{commit.sha}</p>
              <p>{commit.commit.author?.date}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Repo;
