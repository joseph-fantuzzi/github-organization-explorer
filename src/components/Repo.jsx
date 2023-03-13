import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import ReactLoading from "react-loading";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "./Error";
import CommitItem from "./CommitItem";
import { capitalizeFirstLetter, filteredSearch } from "../utils/helpers";
import { fetchCommitList } from "../utils/api-helpers";

const Repo = ({
  commits,
  setCommits,
  repoNotFound,
  setRepoNotFound,
  zeroCommits,
  setZeroCommits,
}) => {
  const { orgName, repoName } = useParams();

  const [searchCommitName, setSearchCommitName] = useState("");
  const [copied, setCopied] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  /**
   * On initial render, sends a get request to github api to retrieve commit data for that repo
   */
  useEffect(() => {
    fetchCommitList(
      orgName,
      repoName,
      setLoadingData,
      setCommits,
      setZeroCommits,
      setRepoNotFound
    );
  }, []);

  /**
   * takes in a sha commit hash and copies it to the user's clipboard
   * @param hash
   */
  const copyShaHash = async (hash) => {
    try {
      setCopied(hash);
      await navigator.clipboard.writeText(hash);
      setTimeout(() => {
        setCopied("");
      }, 3000);
    } catch (err) {
      setCopied("");
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="w-11/12 max-w-6xl min-h-[100svh] md:w-3/4 mx-auto pt-5">
      <Navbar
        searchName={searchCommitName}
        setSearchName={setSearchCommitName}
        repoList={false}
      />
      <div className="py-5 dark:text-white theme-transition">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-medium">
            {capitalizeFirstLetter(orgName)}/{capitalizeFirstLetter(repoName)}
          </h1>
          <Link to={`/${orgName}`}>
            <FiArrowLeft
              size={25}
              className="bg-black border-2 border-black text-white rounded-full p-1 hover:text-black hover:bg-white transition duration-300 ease dark:border-white"
            />
          </Link>
        </div>
        <p className="text-sm font-light">
          {filteredSearch(searchCommitName, commits, true).length}{" "}
          {filteredSearch(searchCommitName, commits, true).length === 1
            ? "commit "
            : "commits "}
          found
        </p>
      </div>
      <div
        className={`flex flex-col gap-3 min-h-main_mobile md:min-h-main_desktop ${
          loadingData && "items-center justify-center pb-40"
        }`}
      >
        {loadingData ? (
          <ReactLoading type={"spin"} color={"#000"} height={100} width={100} />
        ) : repoNotFound ? (
          <Error notFound={null} privateRepos={null} noCommits={false} />
        ) : zeroCommits ? (
          <Error notFound={null} privateRepos={null} noCommits={true} />
        ) : (
          filteredSearch(searchCommitName, commits, true).map((commit, i) => {
            return (
              <CommitItem
                key={i}
                commit={commit}
                copyShaHash={copyShaHash}
                copied={copied}
              />
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
