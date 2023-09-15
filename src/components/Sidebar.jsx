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
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      text: "Request Items",
      path: "/requestItems",
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
      sx={{ paddingLeft: 4 }}
      PaperProps={{
        style: { width: "370px" },
      }}
    >
      <AccountCircleIcon
        sx={{ height: 60, width: 60, color: blue[700], alignSelf: "center" }}
      />
      <Typography variant="h6" color="textPrimary" textAlign="center">
        Account Name
      </Typography>

      <Button
        variant="text"
        startIcon={<EditIcon fontSize="small" />}
        onClick={() => navigate("/edit")}
      >
        Edit Profile
      </Button>

      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.text} onClick={() => navigate(item.path)}>
            <ListItemText
              primary={item.text}
              sx={{
                color:
                  location.pathname === item.path ? blue[700] : "text.primary",
              }}
            />
          </ListItemButton>
        ))}

        <Divider />
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
