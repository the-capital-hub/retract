import "./Search.scss";
import Button from "../Button/Button";

const Search = () => {
  return (
    <div className="search">
      <input type="text" />
      <Button text={"Search"} />
    </div>
  );
};

export default Search;
