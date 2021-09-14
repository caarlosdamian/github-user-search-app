import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <FiSearch className="searchIcon" />
        <input
          type="text"
          className="searchInput"
          placeholder="Search GitHub username..."
        />
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
