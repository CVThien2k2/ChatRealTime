import { useContext } from "react";
import { GroupContext } from "../context/GroupContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../context/Authcontext";
import PotentialChat from "../components/chat/PotentialChat";
import ChatBox from "../components/chat/chatbox";
const Chat = () => {
  const { user } = useContext(AuthContext);
  const {
    userGroups,
    setUserGroups,
    isUserGroupLoading,
    userGroupError,
    updateCurrenChat,
  } = useContext(GroupContext);
  return (
    <>
      (
      <Stack direction="horizontal" gap={4} className="align-item-start">
        <div className="userChat">
          <Stack className="userChat">
            <PotentialChat />
            <Stack className="message-box flex-grow-1 pe-3" gap={3}>
              {isUserGroupLoading && <p>Loading chat...</p>}
              {userGroups?.map((group, index) => {
                return (
                  <div key={index} onClick={() => updateCurrenChat(group)}>
                    <UserChat group={group} user={user} />
                  </div>
                );
              })}
            </Stack>
          </Stack>
        </div>
        <ChatBox />
      </Stack>
      )
    </>
  );
};
export default Chat;
