import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Appbar from "./Appbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MarkChatUnreadRoundedIcon from "@mui/icons-material/MarkChatUnreadRounded";
import { red } from "@mui/material/colors";
import NotificationModal from "./NotificationModal";

const Notifications = ({ openNotifications, setOpenNotifications }) => {
  const NotificationList = [
    {
      name: "Yash Andahale",
      requestList: {
        roomNumber: 301,
        itemName: "PC",
        itemQuantity: 12,
        itemCategory: "Hardware",
      },
    },
    {
      name: "Yash Andahale",
      requestList: {
        roomNumber: 301,
        itemName: "PC",
        itemQuantity: 12,
        itemCategory: "Hardware",
      },
    },
    {
      name: "Yash Andahale",
      requestList: {
        roomNumber: 301,
        itemName: "PC",
        itemQuantity: 12,
        itemCategory: "Hardware",
      },
    },
    {
      name: "Yash Andahale",
      requestList: {
        roomNumber: 301,
        itemName: "PC",
        itemQuantity: 12,
        itemCategory: "Hardware",
      },
    },
  ];
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  });
  const [openModal, setOpenModal] = useState(false);
  let modalId = 0;
  return (
    <>
      <Appbar />
      <Drawer
        anchor="right"
        width="370px"
        open={openNotifications}
        onClose={(e) => {
          setOpenNotifications(false);
        }}
      >
        <List>
          {notifications.map((notification) => (
            <ListItemButton
              key={notification.id}
              onClick={() => {
                setOpenModal(true);
                modalId = notification.id;
              }}
              divider
            >
              <MarkChatUnreadRoundedIcon color="error" />
              <ListItemText
                primary={notification.username}
                sx={{
                  color: red[500],
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <NotificationModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        id={modalId}
      />
    </>
  );
};

export default Notifications;
