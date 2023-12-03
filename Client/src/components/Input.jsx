import React from "react";
import { Paperclip, Image } from "react-bootstrap-icons";

const Input = () => {
  return (
    <div className="Input">
      <input type="text" placeholder="Đang nhập..." />
      <div className="send">
        <Paperclip />
        <input type="text" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <Image />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
