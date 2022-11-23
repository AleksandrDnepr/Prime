import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Breadcrumps extends Component {
  render() {
    return (
      <Box>
        <Breadcrumbs
          separator=">"
          sx={{ ml: 2, mb: 2 }}
          aria-label="breadcrumb"
        >
          <Link underline="hover" href="/properties">
            Properties
          </Link>
          <Typography>Property short description</Typography>
        </Breadcrumbs>
      </Box>
    );
  }
}
