import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";

const Home = ({
  searchValue,
  handleSearchChange,
  handleFormSubmit,
  errorMessage,
}) => {
  return (
    <div className="w-11/12 mx-auto min-h-[100svh] flex flex-col justify-between items-center">
      <div />
      <div className="mb-20 flex flex-col gap-4 items-center">
        <h1 className="text-xl md:text-3xl">GitHub Organization Explorer</h1>
        <div className="w-full">
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search an organization..."
              className="bg-white p-3.5 rounded-xl font-light text-sm w-full border-2 border-white outline-0 focus:border-black transition duration-300 ease"
            />
            <button className="p-4 bg-black border-2 border-white text-white rounded-xl hover:text-black hover:bg-white hover:border-black active:text-black active:bg-white active:border-black transition duration-300 ease">
              <FiSearch />
            </button>
          </form>
          <p className="text-red-400 mt-2 font-light text-sm min-h-[20px]">
            {errorMessage}
          </p>
        </div>
      </div>
      <div className="py-3">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
