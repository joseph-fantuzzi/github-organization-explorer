import { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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

  /**
   * On initial render, sends a get request to github api to retrieve repo data for that organization
   */
  useEffect(() => {
    const fetchOrgRepos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/orgs/${orgName}/repos`);
        setRepos(response.data);
        if (response.data.length === 0) {
          setZeroRepos(true);
        }
      } catch (err) {
        setRepos([]);
        setOrgNotFound(true);
        console.error(err);
      }
    };
    fetchOrgRepos();
  }, []);

  //sorts organization's repos by star count in descending order
  const sortedRepos = repos.sort((a, b) => {
    if (a.stargazers_count < b.stargazers_count) return 1;
    if (a.stargazers_count > b.stargazers_count) return -1;
    return 0;
  });

  return (
    <div className="text-center py-5">
      <div className="mb-5">
        <Link className="border-2" to="/">
          Go Back
        </Link>
      </div>
      {orgNotFound ? (
        <div>Organization Not Found</div>
      ) : zeroRepos ? (
        <div>
          This Organization must be private or simply has no repositories
        </div>
      ) : (
        sortedRepos.map((repo, i) => {
          return (
            <Link key={i} to={repo.name}>
              <div className="p-5 border-2 w-7/12 mx-auto cursor-pointer hover:border-red-500">
                <h1 className="text-xl underline">{repo.name}</h1>
                <p>{repo.language}</p>
                <p>{repo.description}</p>
                <p>Star Count: {repo.stargazers_count}</p>
                <p>Fork Count: {repo.forks_count}</p>
                <p>Date Created: {repo.created_at}</p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Organization;
