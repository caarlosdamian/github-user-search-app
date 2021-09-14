import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchBar = ({ setUser }) => {
  const [username, setusername] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };
  const onChange = (e) => {
    setusername(e.target.value);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <FiSearch className="searchIcon" />
        <form  className="searctForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="searchInput"
          placeholder="Search GitHub username..."
          onChange={onChange}
        />
        <button className="searchButton" onClick={onSubmit}>
          Search
        </button>

        </form>
     
      </div>
    </div>
  );
};

export default SearchBar;
