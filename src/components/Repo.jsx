import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

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

  return (
    <div className="text-center py-5">
      <div className="mb-5">
        <Link className="border-2" to="/">
          Go Back
        </Link>
      </div>
      {repoNotFound ? (
        <div>Repo Not Found</div>
      ) : zeroCommits ? (
        <div>This repository must be private or simply has no commits</div>
      ) : (
        commits.map((commit, index) => {
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
