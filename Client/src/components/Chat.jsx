import React from "react";
import { CameraVideo, PersonFill, ThreeDots } from "react-bootstrap-icons";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Peter</span>
        <div className="chatIcons">
          <CameraVideo color="green" size={30} />
          <PersonFill color="blue" size={30} />
          <ThreeDots color="black" size={30} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
