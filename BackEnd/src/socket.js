const { createServer } = require("node:http");
const { Server } = require("socket.io");
const userService = require("./services/user.service");
function ServerSocket(app) {
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });
  let onlineUsers = [];
  io.on("connection", (socket) => {
    socket.on("addNewUser", (userId) => {
      userService.updateOnline(userId, true);
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
      console.log("Online user", onlineUsers);

      io.emit("getonlineUsers", onlineUsers);
    });
    socket.on("sendMessage", (message) => {
      const user = onlineUsers.find(
        (user) => user.userId === message.recipientId
      );

      if (user) {
        io.to(user.socketId).emit("getMessage", message);
        io.to(user.socketId).emit("getNotification", {
          group_id: message.group_id,
          user_id: message.user_id,
          isRead: false,
          date: new Date(),
        });
      }
    });
    socket.on("sendMessageBox", (message) => {
      const members = message.members;
      const newMessage = message.newMessage;
      for (const member of members) {
        if (member !== newMessage.user_id) {
          const user = onlineUsers.find((user) => user.userId === member);

          if (user) {
            io.to(user.socketId).emit("getMessage", message.newMessage);
            io.to(user.socketId).emit("getNotification", {
              group_id: newMessage.group_id,
              user_id: newMessage.user_id,
              isRead: false,
              date: new Date(),
            });
          }
        }
      }
    });
    socket.on("call", (message) => {
      const members = message.group.members;
      members.forEach((user_id) => {
        if (user_id !== message?.from?._id) {
          const user = onlineUsers.find((user) => user.userId === user_id);
          if (user) {
            io.to(user.socketId).emit("call", message);
          }
        }
      });
    });
    socket.on("createChat", (messages) => {
      const message = messages.newChatBox;

      const user = messages.user;
      const members = message.members;

      for (const member of members) {
        if (user._id !== member) {
          const use = onlineUsers.find((u) => u.userId === member);
          if (use) {
            io.to(use.socketId).emit("newBoxChat", message);
          }
        }
      }
    });
    socket.on("end", (data) => {
      const user = onlineUsers.find((u) => u.userId === data._id);
      if (user) io.to(user.socketId).emit("end", data);
    });

    socket.on("accept", (data) => {
      const toUser = data.caller;
      const receiverId = toUser._id;

      const user = onlineUsers.find((u) => u.userId === receiverId);

      if (user) io.to(user.socketId).emit("accept", data);
    });
    socket.on("reject", (data) => {
      const to = data.to;
      const receiverId = to._id;
      const user = onlineUsers.find((u) => u.userId === receiverId);
      if (user) socket.to(user.socketId).emit("reject", data);
    });

    socket.on("answerCallUser", (data) => {});
    socket.on("disconnect", () => {
      const user = onlineUsers.find((u) => u.socketId === socket.id);
      onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
      userService.updateOnline(user?.userId, false);
      io.emit("getonlineUsers", onlineUsers);
    });
  });
}
module.exports = ServerSocket;
