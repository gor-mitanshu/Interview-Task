import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import {
  Paper,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Mitanshu Gor {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = React.useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/login`,
        {
          email: user.email,
          password: user.password,
        }
      );
      if (!!response) {
        if (!!response.data.status === true) {
          setLoading(true);
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.data.token)
          );
          localStorage.setItem("success", JSON.stringify(response.data.status));
          navigate(state?.path || "/visitors", { replace: true });
          toast.success(response.data.msg);
          setLoading(false);
        } else {
          const error = response.data.msg;
          setLoginErrors(error);
          toast.error(error);
          // debugger;
          setLoading(false);
        }
      } else {
        // debugger;
        const errorss = response.data.msg;
        // setLoginErrors(errorss);
        toast.error(errorss);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!loading ? (
          <Paper
            elevation={5}
            sx={{
              border: "1px",
              marginTop: 4,
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <>
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 0 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={user.email}
                    onChange={handleChange}
                  />
                  {loginErrors.email && (
                    <Typography variant="caption" color="error">
                      {loginErrors.email.length > 0 ? loginErrors.email[0] : ""}
                    </Typography>
                  )}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  {loginErrors.password && (
                    <Typography variant="caption" color="error">
                      {loginErrors.password.length > 0
                        ? loginErrors.password[0]
                        : ""}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid item xs textAlign={"center"} marginBottom={1}>
                    <Link to={"/forget-password"}>Forgot password?</Link>
                  </Grid>
                  <Grid item textAlign={"center"} marginBottom={1}>
                    <Link to={"/register"}>Don't have an account? Sign Up</Link>
                  </Grid>
                </Box>
              </>
            </Box>
            <Copyright sx={{ my: 2 }} />
          </Paper>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Login;
