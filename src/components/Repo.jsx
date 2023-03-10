import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineCalendar } from "react-icons/ai";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

  /**capitalizes the first letter of a string
   * @returns string
   */
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /**formats date with format month.date.year
   * @returns string
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`;
  };

  return (
    <div className="w-11/12 max-w-6xl min-h-[100svh] md:w-3/4 mx-auto pt-5">
      <Navbar
        searchName={searchCommitName}
        setSearchName={setSearchCommitName}
        repoList={false}
      />
      <div className="py-5">
        <h1 className="text-2xl font-medium">
          {capitalizeFirstLetter(orgName)}/{capitalizeFirstLetter(repoName)}
        </h1>
        <p className="text-sm font-light">
          {filteredCommitSearch().length}{" "}
          {filteredCommitSearch().length === 1 ? "commit " : "commits "}
          found
        </p>
      </div>
      <div className="flex flex-col gap-3 min-h-main">
        {repoNotFound ? (
          <div>Repo Not Found</div>
        ) : zeroCommits ? (
          <div>This repository must be private or simply has no commits</div>
        ) : (
          filteredCommitSearch().map((commit, i) => {
            return (
              <div
                key={i}
                className="p-5 md:p-10 shadow-lg rounded-lg flex flex-col lg:flex-row lg:items-center gap-5 justify-between bg-white"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-5 mb-3">
                    <h1 className="text-sm md:text-base">
                      {commit.commit.message}
                    </h1>
                    <div className="flex items-center gap-1">
                      <AiOutlineCalendar size={20} />
                      <p className="font-light text-sm">
                        {formatDate(commit.commit.author.date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={commit.author?.avatar_url}
                      className="rounded-full w-8"
                    />
                    <p>{commit.author?.login}</p>
                  </div>
                </div>
                <div className="w-fit flex items-center gap-2 bg-black text-white font-light px-5 py-3 rounded-full">
                  <p>{commit.sha}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="text-center py-5">
        <Footer />
      </div>
    </div>
  );
};

export default Repo;
