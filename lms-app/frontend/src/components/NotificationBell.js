import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "../styles/NotificationBell.css";


const socket = io("http://localhost:5000");

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("receiveNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, []);

  return (
    <div>
      <h4>Notifications</h4>
      {notifications.map((notif, index) => (
        <p key={index}>{notif.message}</p>
      ))}
    </div>
  );
};

export default NotificationBell;
