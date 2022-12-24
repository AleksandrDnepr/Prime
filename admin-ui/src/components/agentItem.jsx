import { Component } from "react";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box
} from "@mui/material";
import { ButtonEdit } from "./buttonEdit";
import { ButtonDelete } from "./buttonDelete";

export class AgentItem extends Component {
  render() {
    const { photo, name } = this.props;

    return (
      <ListItem
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: 0.5,
          paddingBottom: 0.5,
          borderBottom: "1px solid grey",
        }}
      >
        <ListItemAvatar>
          <Avatar variant="square" alt={name} src={photo} />
        </ListItemAvatar>
        <ListItemText primary={name}
        sx={{ display: "flex", alignItems: "center" }} />
        <Box>
          <ButtonEdit path={"/admin/properties"}/>
          <ButtonDelete path={"/admin/properties"}/>
        </Box>
        
      </ListItem>
    );
  }
}
