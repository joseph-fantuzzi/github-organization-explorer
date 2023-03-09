import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Commits = ({ commits, setCommits, currentOrganization, BASE_URL }) => {
  const { repoName } = useParams();

  useEffect(() => {
    const viewCommitList = async (repo) => {
      try {
        const response = await axios.get(
          `${BASE_URL}/repos/${currentOrganization}/${repo}/commits`
        );
        setCommits(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    viewCommitList(repoName);
  }, []);

  return (
    <div className="text-center py-5">
      <div className="mb-5">
        <Link className="border-2" to="/">
          Go Back
        </Link>
      </div>
      {commits.map((commit, index) => {
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
      })}
    </div>
  );
};

export default Commits;
