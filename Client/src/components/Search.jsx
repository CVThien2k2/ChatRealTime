import React from "react";

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
        <input type="text" />
      </div>
    </div>
  );
};

export default Search;
