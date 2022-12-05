import React, { Component } from 'react';
import { Box, CircularProgress } from "@mui/material";

export class Loading extends Component {

  render() { 

    return (
      <Box>
        <CircularProgress color="primary"
        />
      </Box>
    )
  }
}
