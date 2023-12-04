import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Search from "./Search";
import Chats from "./Chats";

const ChatList = () => {
  return (
    <div className="chatlist">
      <Search />
      <Chats />
    </div>
  );
};

export default ChatList;
