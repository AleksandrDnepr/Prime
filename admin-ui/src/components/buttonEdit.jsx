import React, { Component } from "react";

import Edit from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

export default class ButtonEdit extends Component {
  render() {
    return (
      <IconButton onClick={() => console.log("edit")}>
        <Edit color="primary" />
      </IconButton>
    );
  }
}
