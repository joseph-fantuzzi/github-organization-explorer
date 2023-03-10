const Home = ({ searchValue, handleSearchChange, handleFormSubmit }) => {
  return (
    <div className="text-center py-5">
      <h1 className="text-2xl">GitHub Organization Explorer</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          className="border-2"
        />
        <button className="border-2">Search</button>
      </form>
    </div>
  );
};

export default Home;
