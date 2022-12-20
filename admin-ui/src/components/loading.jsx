import React, { Component } from "react";
import { Box, CircularProgress } from "@mui/material";

export class Loading extends Component {
  render() {
    return (
      <Box
        component="div"
        sx={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }
}
