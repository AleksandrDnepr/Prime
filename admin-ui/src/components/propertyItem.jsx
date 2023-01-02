import { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
} from "@mui/material";
import { ButtonEdit } from "./buttonEdit";
import { ButtonDelete } from "./buttonDelete";

export class PropertyItem extends Component {
  render() {
    const { prop_id, title, preview } = this.props;

    return (
      <ListItem
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 0.5,
          paddingRight: 0.5,
          borderBottom: "1px solid grey",
        }}
      >
        <Link
          underline="hover"
          component={RouterLink}
          to={`/properties/${prop_id}/messages`}
          sx={{ display: "flex" }}
        >
          <ListItemAvatar>
            <Avatar variant="square" alt={title} src={preview} />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            sx={{ display: "flex", alignItems: "center" }}
          />
        </Link>
        <Box>
          <ButtonEdit />
          <ButtonDelete />
        </Box>
      </ListItem>
    );
  }
}
