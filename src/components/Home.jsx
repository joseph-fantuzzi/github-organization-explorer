import { Link } from "react-router-dom";

const Home = ({
  sortedRepos,
  searchValue,
  handleSearchChange,
  handleFormSubmit,
  errorMessage,
}) => {
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
        })}
      </div>
    </div>
  );
};

export default Home;
