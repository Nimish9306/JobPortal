import "./config/env.js";
import app from "./app.js";
import connectDB from "./config/db.js";
import cloudinary from "./config/cloudinary.js";
import http from "http";
import { initSocket }
from "./socket.js";

const PORT =
  process.env.PORT || 5000;

// connect database

connectDB();

// create http server

const server =
  http.createServer(app);

// initialize socket.io

const io = initSocket(server);

// store online users

const onlineUsers = {};

// socket connection

io.on("connection", (socket) => {

  console.log(
    "User connected:",
    socket.id
  );

  // user joins

  socket.on("join", (userId) => {

    onlineUsers[userId] =
      socket.id;

    console.log(
      "Online Users:",
      onlineUsers
    );

  });

  // disconnect user

  socket.on("disconnect", () => {

    console.log(
      "User disconnected:",
      socket.id
    );

    for (const userId in onlineUsers) {

      if (
        onlineUsers[userId] ===
        socket.id
      ) {

        delete onlineUsers[userId];

        break;

      }

    }

    console.log(
      "Updated Online Users:",
      onlineUsers
    );

  });

});

// start server

server.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});