import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";

const Home = ({ searchValue, handleSearchChange, handleFormSubmit }) => {
  return (
    <div className="w-11/12 mx-auto min-h-[100svh] flex flex-col justify-between items-center">
      <div />
      <div className="mb-20 flex flex-col gap-4 items-center">
        <h1 className="text-xl md:text-3xl">GitHub Organization Explorer</h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center gap-2 w-full"
        >
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search Organization..."
            className="bg-white p-3 rounded-lg font-light text-sm w-full border-2 border-white outline-0 focus:border-black transition duration-300 ease"
          />
          <button className="p-4 bg-black text-white rounded-lg hover:text-black hover:bg-white active:text-black active:bg-white transition duration-300 ease">
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
