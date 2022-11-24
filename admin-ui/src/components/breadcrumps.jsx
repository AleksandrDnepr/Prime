import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Breadcrumps extends Component {
  render() {
    const { title } = this.props
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
          <Typography>{ title }</Typography>
        </Breadcrumbs>
      </Box>
    );
  }
}
