import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Error = ({ notFound, privateRepos, noCommits }) => {
  return (
    <div
      className={`${
        notFound && "right-animation"
      } flex items-center gap-3 bg-black text-white px-5 py-1 rounded-full font-light text-sm w-fit border-2 border-black dark:border-white theme-transition`}
    >
      <p className="m-1">
        {privateRepos
          ? "This organization must have all private repositories or simply has none"
          : noCommits
          ? "This repository has no commits"
          : privateRepos === false
          ? "This organization does not exist"
          : notFound
          ? "This page does not exist"
          : "This repository does not exist"}
      </p>
      <div className="w-1 h-12 rounded-full bg-white rotate-[30deg]" />
      <Link to="/" data-testid="error-btn">
        <AiOutlineHome
          size={26}
          className="bg-white border-2 border-white rounded-full text-black m-1 p-1 hover:text-white hover:bg-black transition duration-300 ease"
        />
      </Link>
    </div>
  );
};

export default Error;
