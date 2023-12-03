import React from "react";
import { CameraVideo, Telephone } from "react-bootstrap-icons";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Peter</span>
        <div className="chatIcons">
          <CameraVideo color="black" size={25} />
          <Telephone color="black" size={25} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
