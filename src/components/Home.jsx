import { FiSearch } from "react-icons/fi";

const Home = ({ searchValue, handleSearchChange, handleFormSubmit }) => {
  return (
    <div className="text-center py-5 min-h-[100svh]">
      <h1 className="text-2xl">GitHub Organization Explorer</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          className="border-2"
          placeholder="Search Organization..."
        />
        <button className="border-2">
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default Home;
