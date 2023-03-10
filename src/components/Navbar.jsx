import { FiSearch } from "react-icons/fi";

const Navbar = ({ searchRepoName, setSearchRepoName }) => {
  /**
   * Sets the search value state to the value within the input
   * @param {*} e
   */
  const handleSearchChange = (e) => {
    setSearchRepoName(e.target.value);
  };

  return (
    <div className="pb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-2">
      <h1 className="font-light">GitHub Organization Explorer</h1>
      <div className="relative flex items-center gap-2 w-full md:w-1/2">
        <FiSearch className="absolute top-3 left-3" />
        <input
          type="text"
          value={searchRepoName}
          onChange={handleSearchChange}
          placeholder="Search this repository..."
          className="bg-white py-2 px-8 rounded-full font-light text-sm w-full border-2 border-white outline-0 focus:border-black transition duration-300 ease"
        />
      </div>
    </div>
  );
};

export default Navbar;
