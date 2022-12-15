import React, { Component } from "react";
import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export class ButtonDelete extends Component {
  render() {
    return (
      <IconButton size="small" onClick={() => console.log("delete")}>
        <Close color="primary" />
      </IconButton>
    );
  }
}
