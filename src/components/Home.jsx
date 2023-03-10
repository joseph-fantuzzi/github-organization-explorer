import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";

const Home = ({ searchValue, handleSearchChange, handleFormSubmit }) => {
  return (
    <div className="min-h-[100svh] flex flex-col justify-between items-center">
      <div />
      <div className="mb-20 flex flex-col items-center">
        <h1 className="text-3xl">GitHub Organization Explorer</h1>
        <form onSubmit={handleFormSubmit} className="flex items-center gap-1">
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
      <div className="py-3">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
