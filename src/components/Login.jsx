import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BoyIcon from '@mui/icons-material/Boy';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {

  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event)=>{
    event.preventDefault();

    const formData = new FormData()
      formData.append('role', role);
      formData.append('email', email);
      formData.append('password', password);
      axios.post("http://localhost:3000/login", formData)
      .then(res=> console.log(res))
      .catch((err=>console.log(err)));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px', 
            padding: '20px', 
            border: '2px solid #1976d2'
          }}
        >
            {/* <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOpenIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography> */}
            <Box sx={{m: 2, display: "flex", width: "100%" , justifyContent: "space-around"}}>
                <Box>
                    <Button>
                      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} onClick={()=>setRole("Admin")}>
                        < AdminPanelSettingsIcon />
                      </Avatar>
                    </Button>
                    <Typography align="center">
                            Admin
                    </Typography>
                </Box>
                <Box>
                    <Button>
                      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} onClick={()=>setRole("Teacher")}>
                        <CastForEducationIcon />
                      </Avatar>
                    </Button>
                    <Typography align="center">
                        Teacher
                    </Typography>
                </Box>
                <Box>
                    <Button>
                      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} onClick={()=>setRole("Staff")}>
                        <BoyIcon />
                      </Avatar>
                    </Button>
                    <Typography align="center">
                        Staff
                    </Typography>
                </Box>
                
            </Box>
          
          <Box component="form"onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField sx={{display: "none"}}
              margin="normal"
              required
              fullWidth
              name="role"
              type="text"
              id="role"
              value={role}
              autoComplete="role"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e)=>{setEmail(e.currentTarget.value)}}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e)=>{setPassword(e.currentTarget.value)}}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/login" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
