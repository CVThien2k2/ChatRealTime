import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import SearchUser from "./SearchUser";
import Chats from "./Chats";
// import { Search } from "react-bootstrap-icons";

const ChatList = () => {
  return (
    <div className="chatlist">
      <SearchUser />
      <Chats />
    </div>
  );
};

export default ChatList;
