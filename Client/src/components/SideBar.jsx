import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Search from "./Search";
import Chats from "./Chats";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
