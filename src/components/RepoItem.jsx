import { Link } from "react-router-dom";
import {
  AiOutlineFork,
  AiOutlineStar,
  AiOutlineCalendar,
} from "react-icons/ai";
import { formatDate } from "../utils/helpers";

const RepoItem = ({ repo }) => {
  return (
    <Link to={repo.name.trim().toLowerCase()}>
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
};

export default RepoItem;
