import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";
import Theme from "./Theme";

const Home = ({
  searchValue,
  handleSearchChange,
  handleFormSubmit,
  errorMessage,
  toggle,
  setToggle,
}) => {
  return (
    <div className="w-11/12 mx-auto min-h-[100svh] flex flex-col justify-between items-center">
      <div />
      <div className="mb-20 flex flex-col gap-4 items-center py-10">
        <h1 className="left-animation text-xl md:text-3xl dark:text-white theme-transition">
          GitHub Organization Explorer
        </h1>
        <div className="w-full">
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search an organization..."
              data-testid="home-input"
              className="right-animation bg-white p-3.5 rounded-xl font-light text-sm w-full border-2 border-white outline-0 focus:border-black transition duration-300 ease dark:bg-black dark:focus:bg-white dark:focus:border-white dark:text-white dark:focus:text-black"
            />
            <button
              className="up-animation p-4 bg-black border-2 border-black text-white rounded-xl hover:text-black hover:bg-white active:text-black active:bg-white transition duration-300 ease dark:border-white"
              data-testid="home-btn"
            >
              <FiSearch />
            </button>
          </form>
          <p className="text-red-400 mt-2 font-light text-sm min-h-[20px]">
            {errorMessage}
          </p>
        </div>
      </div>
      <div className="down-animation delay-animation-07 py-3">
        <Footer />
      </div>
      <Theme toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Home;
