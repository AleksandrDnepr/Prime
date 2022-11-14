import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Background from "./background.jpg";

export class Properties extends Component {
  render() {
    return (
      <Box
        component="div"
        sx={{
          width: `calc(100vw)`,
          height: `calc(100vh)`,
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        <p>properties</p>
        <Button
          component="a"
          href="http://localhost:3100/api/auth/login/federated/google"
          variant="contained"
          size="lg"
        >
          Sign in with Google
        </Button>
        <Button
          component="a"
          href="http://localhost:3100/api/auth/logout"
          variant="contained"
          size="lg"
        >
          logout
        </Button>
      </Box>
    );
  }
}
