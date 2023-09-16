import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import { blue } from "@mui/material/colors";

const Sidebar = ({ open, setOpen }) => {
  const menuItems = [
    {
      text: "Function 1",
    },
    {
      text: "Function 2",
    },
    {
      text: "Function 3",
    },
    {
      text: "Function 4",
    },
  ];

  return (
    <Drawer
      onClose={(e) => setOpen(false)}
      anchor="left"
      open={open}
      sx={{ paddingLeft: 4, width: 270 }}
      PaperProps={{
        style: {
          width: "370px",
        },
      }}
    >
      <AccountCircleIcon
        sx={{ height: 60, width: 60, color: blue[700], alignSelf: "center" }}
      />
      <Typography variant="h6" color="textPrimary" textAlign="center">
        Account Name
      </Typography>

      <Button variant="text" startIcon={<EditIcon fontSize="small" />}>
        Edit Profile
      </Button>

      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.text}>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
        <Button
          variant="text"
          color="error"
          startIcon={<LogoutIcon />}
          fullWidth
        >
          Log out
        </Button>
      </List>
    </Drawer>
  );
};

export default Sidebar;
