import { useContext } from "react";
import { GroupContext } from "../../context/GroupContext";
import { AuthContext } from "../../context/Authcontext";

const PotentialChat = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(GroupContext);

  return (
    <>
      <div className="all-users">
        <div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp&w=256"
            alt="Avatar"
            className="avatar-user"
          />
        </div>
        {potentialChats &&
          potentialChats.map((u, index) => (
            <div
              className="single-user"
              key={index}
              onClick={() => createChat(user._id, u._id)}
            >
              {u.name}
              <span
                className={
                  onlineUsers?.some((user) => {
                    return user?.userId === u?._id;
                  })
                    ? "user-online"
                    : ""
                }
              ></span>
            </div>
          ))}
      </div>
    </>
  );
};

export default PotentialChat;
