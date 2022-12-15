import { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Divider,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ButtonEdit from "./buttonEdit";
import ButtonDelete from "./buttonDelete";

export class PropertyItem extends Component {
  render() {
    const { id, title, preview } = this.props;

    return (
      <ListItem
        alignItems="center"
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: 0.5,
          paddingBottom: 0.5,
        }}
      >
        <Link
          underline="hover"
          component={RouterLink}
          to={`/properties/${id}/messages`}
          sx={{ display: "flex" }}
        >
          <ListItemAvatar>
            <Avatar variant="square" alt={title} src={preview} />
          </ListItemAvatar>
          <ListItemText primary={title} />
          <ButtonEdit />
          <ButtonDelete />
        </Link>
        <Divider sx={{ width: "100%" }} />
      </ListItem>
    );
  }
}
