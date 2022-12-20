import { Component } from "react";

import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export class AgentItem extends Component {
  render() {
    const { photo, name } = this.props;

    return (
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: 0.5,
          paddingBottom: 0.5,
        }}
      >
        <ListItemAvatar>
          <Avatar variant="square" alt={name} src={photo} />
        </ListItemAvatar>
        <ListItemText primary={name} />

        <Divider sx={{ width: "100%" }} />
      </ListItem>
    );
  }
}
