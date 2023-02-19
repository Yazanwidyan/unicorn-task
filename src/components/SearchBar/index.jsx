import React from "react";
import "./styles.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <input
      type="text"
      placeholder="Search products"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
