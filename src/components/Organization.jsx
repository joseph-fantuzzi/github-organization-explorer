import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "./Error";
import RepoItem from "./RepoItem";
import { capitalizeFirstLetter, filteredSearch } from "../utils/helpers";
import { fetchRepoList } from "../utils/api-helpers";

const Organization = ({
  repos,
  setRepos,
  orgNotFound,
  setOrgNotFound,
  zeroRepos,
  setZeroRepos,
}) => {
  const { orgName } = useParams();

  const [searchRepoName, setSearchRepoName] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  /**
   * On initial render, sends a get request to github api to retrieve repo data for that organization
   */
  useEffect(() => {
    fetchRepoList(
      orgName,
      setLoadingData,
      setRepos,
      setZeroRepos,
      setOrgNotFound
    );
  }, []);

  /**sorts organization's repos by star count in descending order
   * @returns sorted array
   */
  const sortedRepos = repos.sort((a, b) => {
    if (a.stargazers_count < b.stargazers_count) return 1;
    if (a.stargazers_count > b.stargazers_count) return -1;
    return 0;
  });

  return (
    <div className="w-11/12 max-w-6xl min-h-[100svh] md:w-3/4 mx-auto pt-5">
      <Navbar
        searchName={searchRepoName}
        setSearchName={setSearchRepoName}
        repoList={true}
      />
      <div className="py-5 dark:text-white theme-transition">
        <h1 className="text-2xl font-medium">
          {capitalizeFirstLetter(orgName)}
        </h1>
        <p className="text-sm font-light">
          {filteredSearch(searchRepoName, sortedRepos, false).length}{" "}
          {filteredSearch(searchRepoName, sortedRepos, false).length === 1
            ? "repository "
            : "repositories "}
          found
        </p>
      </div>
      <div
        className={`flex flex-col gap-3 min-h-main_mobile md:min-h-main_desktop ${
          loadingData && "items-center justify-center pb-40"
        }`}
      >
        {loadingData ? (
          <ReactLoading
            type={"spin"}
            color={localStorage.getItem("theme") === "dark" ? "#FFF" : "#000"}
            height={100}
            width={100}
          />
        ) : orgNotFound ? (
          <Error notFound={null} privateRepos={false} noCommits={null} />
        ) : zeroRepos ? (
          <Error notFound={null} privateRepos={true} noCommits={null} />
        ) : (
          filteredSearch(searchRepoName, sortedRepos, false).map((repo, i) => {
            return <RepoItem key={i} repo={repo} />;
          })
        )}
      </div>
      <div className="text-center py-5">
        <Footer />
      </div>
    </div>
  );
};

export default Organization;
