import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Appbar from "./Appbar";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { blue } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  var prevPassword;
  var newPassword;
  var confirmNewPassword;

  return (
    <>
      <Appbar />
      <form autoComplete="off">
        <Box
          sx={{
            position: "absolute",
            left: {
              xs: "20vw",
              md: "35vw",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: {
              xs: "60vw",
              md: "30vw",
            },
            gap: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <ModeEditOutlineRoundedIcon />
          </Avatar>
          <Typography variant="h4" sx={{ color: blue[500] }}>
            Edit Profile
          </Typography>
          <TextField
            id="email"
            label="email"
            variant="outlined"
            placeholder="default@gmail.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="firstName"
            label="firstName"
            variant="outlined"
            type="text"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="lastName"
            label="lastName"
            variant="outlined"
            type="text"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            required
          />
          <Button
            startIcon={<ManageAccountsRoundedIcon />}
            mt={2}
            variant="contained"
            fullWidth
            color="warning"
            onClick={() => {
              setChangePassword(true);
            }}
          >
            Change Password
          </Button>
          {changePassword && (
            <TextField
              id="prevPassword"
              label="prevPassword"
              variant="outlined"
              type="password"
              onChange={(e) => (prevPassword = e.target.value)}
              fullWidth
              required
            />
          )}
          {changePassword && (
            <TextField
              id="newPassword"
              label="newPassword"
              variant="outlined"
              type="password"
              onChange={(e) => (newPassword = e.target.value)}
              fullWidth
              required
            />
          )}
          {changePassword && (
            <TextField
              id="confirmNewPassword"
              label="confirmNewPassword"
              variant="outlined"
              type="password"
              onChange={(e) => (confirmNewPassword = e.target.value)}
              fullWidth
              required
            />
          )}
          {changePassword && (
            <Button
              startIcon={<KeyRoundedIcon />}
              mt={2}
              variant="contained"
              fullWidth
              onClick="changePassword"
            >
              Update Password
            </Button>
          )}
          <Button
            startIcon={<AccountCircleRoundedIcon />}
            variant="contained"
            type="submit"
            color="success"
            fullWidth
          >
            Update Profile
          </Button>
        </Box>
      </form>
    </>
  );
};

export default EditProfile;
