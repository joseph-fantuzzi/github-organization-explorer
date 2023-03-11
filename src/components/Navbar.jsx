import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ searchName, setSearchName, repoList }) => {
  /**
   * Sets the search value state to the value within the input
   * @param {*} e
   */
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div className="pb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-2">
      <Link to="/" className="font-light dark:text-white theme-transition">
        GitHub Organization Explorer
      </Link>
      <div className="relative flex items-center gap-2 w-full md:w-1/2">
        <FiSearch className="absolute top-3 left-3 dark:text-white theme-transition" />
        <input
          type="text"
          value={searchName}
          onChange={handleSearchChange}
          data-testid="nav-input"
          placeholder={
            repoList
              ? "Search this organization..."
              : "Search this repository..."
          }
          className="bg-white py-2 px-8 rounded-full font-light text-sm w-full border-2 border-white focus:outline-none focus:border-black transition duration-300 ease dark:bg-black dark:focus:border-white dark:text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
