import React from "react";
// import { Search } from "react-bootstrap-icons";

const Search = () => {
  return (
    <div className="search">
      <div className="userChat">
        <img
          className="img-avt"
          src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Peter</span>
        </div>
      </div>

      <div className="searchForm">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;
