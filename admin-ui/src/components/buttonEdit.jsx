import React, { Component } from "react";

import Edit from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

export class ButtonEdit extends Component {
  render() {
    return (
      <IconButton size="small" onClick={() => console.log("edit")}>
        <Edit color="primary" />
      </IconButton>
    );
  }
}
