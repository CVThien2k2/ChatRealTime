import React from "react";
import { Search } from "react-bootstrap-icons";

const SearchUser = () => {
  return (
    <div className="searchUser">
      <div className="searchForm">
        <Search color="red" size={15} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchUser;
