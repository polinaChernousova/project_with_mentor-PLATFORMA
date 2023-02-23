import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { user, logIn } = useAuth();

  const handleLoginSubmit = async (e) => {
    // e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop="200px"
      >
        {error && <Alert variant="danger">{error}</Alert>}
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "2px",
            fontSize: "32px",
          }}
        >
          Sign in to Store
        </Typography>
        <TextField
          sx={{
            marginTop: "30px",
            width: "40%",
          }}
          label="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{
            marginTop: "30px",
            width: "40%",
          }}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{
            marginTop: "30px",
            width: "40%",
          }}
          variant="contained"
          onClick={handleLoginSubmit}
        >
          Sign In
        </Button>
        <div style={{ marginTop: "15px" }}>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </div>
      </Grid>
    </>
  );
};

export default Login;
