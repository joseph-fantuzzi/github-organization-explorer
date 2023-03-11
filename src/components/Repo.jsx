import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiCopy, FiCheck, FiArrowLeft } from "react-icons/fi";
import ReactLoading from "react-loading";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "./Error";

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
  const [copied, setCopied] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  /**
   * On initial render, sends a get request to github api to retrieve commit data for that repo
   */
  useEffect(() => {
    const viewCommitList = async () => {
      try {
        setLoadingData(true);
        const response = await axios.get(
          `${BASE_URL}/repos/${orgName}/${repoName}/commits`
        );
        setLoadingData(false);
        setCommits(response.data);
        if (response.data.length === 0) {
          setZeroCommits(true);
        }
      } catch (err) {
        setLoadingData(false);
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

  // takes in a sha commit hash and copies it to the user's clipboard
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
      <div className="py-5">
        <div className="right-animation delay-animation-03 flex items-center gap-3">
          <h1 className="text-2xl font-medium">
            {capitalizeFirstLetter(orgName)}/{capitalizeFirstLetter(repoName)}
          </h1>
          <Link to={`/${orgName}`}>
            <FiArrowLeft
              size={25}
              className="bg-black text-white rounded-full p-1 hover:text-black hover:bg-white transition duration-300 ease"
            />
          </Link>
        </div>
        <p className="right-animation delay-animation-05 text-sm font-light">
          {filteredCommitSearch().length}{" "}
          {filteredCommitSearch().length === 1 ? "commit " : "commits "}
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
          filteredCommitSearch().map((commit, i) => {
            return (
              <div
                key={i}
                className="down-animation stagger-children p-5 md:p-10 shadow-md rounded-lg flex flex-col lg:flex-row lg:items-center gap-5 justify-between bg-white"
                style={{ "--i": i }}
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
                <div className="w-fit flex items-center gap-2 bg-black text-white font-light px-5 rounded-full">
                  {copied === commit.sha ? (
                    <FiCheck className="m-1 text-green-300" />
                  ) : (
                    <FiCopy
                      className="cursor-pointer m-1"
                      onClick={() => copyShaHash(commit.sha)}
                    />
                  )}
                  <div className="bg-white w-1 h-10" />
                  <p className="m-1">{commit.sha.slice(0, 7)}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="text-center py-5 down-animation delay-animation-1">
        <Footer />
      </div>
    </div>
  );
};

export default Repo;
