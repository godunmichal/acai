import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  SearchContainer,
  SearchInput,
  SearchIconContainer,
} from "./SearchElements";
function Search() {
  return (
    <SearchContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <SearchInput placeholder="Search" />
    </SearchContainer>
  );
}

export default Search;
