import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineFork,
  AiOutlineStar,
  AiOutlineCalendar,
} from "react-icons/ai";
import ReactLoading from "react-loading";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "./Error";

const Organization = ({
  BASE_URL,
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
    const fetchOrgRepos = async () => {
      try {
        setLoadingData(true);
        const response = await axios.get(`${BASE_URL}/orgs/${orgName}/repos`);
        setLoadingData(false);
        setRepos(response.data);
        if (response.data.length === 0) {
          setZeroRepos(true);
        }
      } catch (err) {
        setLoadingData(false);
        setRepos([]);
        setOrgNotFound(true);
        console.error(err);
      }
    };
    fetchOrgRepos();
  }, []);

  /**sorts organization's repos by star count in descending order
   * @returns sorted array
   */
  const sortedRepos = repos.sort((a, b) => {
    if (a.stargazers_count < b.stargazers_count) return 1;
    if (a.stargazers_count > b.stargazers_count) return -1;
    return 0;
  });

  /**filters organization's repos by search query from user
   * @returns filtered array
   */
  const filteredRepoSearch = () => {
    const sanitize = searchRepoName.trim().toLowerCase();
    if (!sanitize) return sortedRepos;
    return sortedRepos.filter((repo) => {
      return repo.name.toLowerCase().includes(sanitize);
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
        searchName={searchRepoName}
        setSearchName={setSearchRepoName}
        repoList={true}
      />
      <div className="py-5 dark:text-white theme-transition">
        <h1 className="text-2xl font-medium">
          {capitalizeFirstLetter(orgName)}
        </h1>
        <p className="text-sm font-light">
          {filteredRepoSearch().length}{" "}
          {filteredRepoSearch().length === 1 ? "repository " : "repositories "}
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
          filteredRepoSearch().map((repo, i) => {
            return (
              <Link key={i} to={repo.name.trim().toLowerCase()}>
                <div className="p-5 md:p-10 border-2 border-white cursor-pointer shadow-md rounded-lg flex flex-col lg:flex-row lg:items-center gap-5 justify-between bg-white hover:shadow-none hover:border-gray-500 transition duration-300 ease dark:bg-black dark:text-white dark:border-gray-500 dark:hover:border-white dark:shadow-none">
                  <div>
                    <div className="flex flex-wrap items-center gap-5 mb-3">
                      <h1 className="text-xl md:text-2xl">{repo.name}</h1>
                      <p className="border-2 border-black py-0.5 px-2 rounded-full text-sm font-light dark:border-gray-500 theme-transition">
                        {repo.language ? repo.language : "None"}
                      </p>
                      <div className="flex items-center gap-1">
                        <AiOutlineCalendar size={20} />
                        <p className="font-light text-sm">
                          {formatDate(repo.created_at)}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs font-light">{repo.description}</p>
                  </div>
                  <div className="w-fit border-2 border-black flex items-center gap-2 bg-black text-white font-light px-5 py-2 rounded-full dark:border-gray-500 theme-transition">
                    <div className="flex gap-1 items-center">
                      <AiOutlineStar size={25} />
                      <p>{repo.stargazers_count.toLocaleString()}</p>
                    </div>
                    <div className="bg-white w-1 h-8 rounded-full dark:bg-gray-500 theme-transition" />
                    <div className="flex gap-1 items-center">
                      <AiOutlineFork size={25} />
                      <p>{repo.forks_count.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </Link>
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

export default Organization;
