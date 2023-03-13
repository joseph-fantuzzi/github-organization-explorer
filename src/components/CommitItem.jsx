import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { FiCopy, FiCheck } from "react-icons/fi";
import { formatDate } from "../utils/helpers";

const CommitItem = ({ commit, copyShaHash, copied }) => {
  return (
    <div className="p-5 md:p-10 shadow-md border-2 border-white rounded-lg flex flex-col lg:flex-row lg:items-center gap-5 justify-between bg-white dark:bg-black dark:text-white dark:border-gray-500 dark:shadow-none theme-transition">
      <div>
        <div className="flex flex-wrap items-center gap-5 mb-3">
          <h1 className="text-sm md:text-base">
            {commit.commit.message.length >= 200
              ? `${commit.commit.message.slice(0, 200)}...`
              : commit.commit.message}
          </h1>
          <div className="flex items-center gap-1">
            <AiOutlineCalendar size={20} />
            <p className="font-light text-sm">
              {formatDate(commit.commit.author.date)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {commit.author ? (
            <img src={commit.author?.avatar_url} className="rounded-full w-8" />
          ) : (
            <AiOutlineUser className="bg-black text-white rounded-full p-1.5 w-8 h-8" />
          )}
          <p>
            {commit.author ? commit.author?.login : commit.commit.author.name}
          </p>
        </div>
      </div>
      <div className="w-fit flex items-center gap-2 border-2 border-black bg-black text-white font-light px-5 py-2 rounded-full dark:border-gray-500 theme-transition">
        {copied === commit.sha ? (
          <FiCheck className="m-1 text-green-300" />
        ) : (
          <FiCopy
            className="cursor-pointer m-1"
            onClick={() => copyShaHash(commit.sha)}
          />
        )}
        <div className="bg-white w-1 h-8 rounded-full dark:bg-gray-500 theme-transition" />
        <p className="m-1">{commit.sha.slice(0, 7)}</p>
      </div>
    </div>
  );
};

export default CommitItem;
