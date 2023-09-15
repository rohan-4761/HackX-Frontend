import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sidebar from "./Sidebar";

const Appbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large">
            <MenuOpenIcon
              sx={{ color: "white" }}
              onClick={() => setOpenDrawer(true)}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <IconButton>
            <Badge badgeContent={5} overlap="circular" color="error">
              <NotificationsIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Appbar;
