import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Error = ({ privateRepos }) => {
  return (
    <div className="flex items-center gap-3 bg-black text-white px-5 rounded-full font-light text-sm w-fit">
      <p className="m-1">
        {privateRepos
          ? "This organization must have all private repositories or simply has none"
          : "This organization does not exist"}
      </p>
      <div className="w-1 h-14 rounded-full bg-white rotate-[30deg]" />
      <Link to="/">
        <FiArrowLeft
          size={26}
          className="bg-white border-2 border-white rounded-full text-black m-1 p-1 hover:text-white hover:bg-black transition duration-300 ease"
        />
      </Link>
    </div>
  );
};

export default Error;
