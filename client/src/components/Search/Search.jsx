import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="right">
        <input placeholder="Search for your query" type="text" />
      </div>
      <div className="left">
        <p>Search</p>
      </div>
    </div>
  );
};

export default Search;
