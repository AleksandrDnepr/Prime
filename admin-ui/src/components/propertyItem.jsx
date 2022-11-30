import { Component } from "react";

import {
  Avatar,
  Divider,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export class PropertyItem extends Component {
  render() {
    const { id, title, preview } = this.props;

    return (
        <ListItem
          alignItems="center"
          sx={{
            flexDirection:"column",
            alignItems: "flex-start",
            paddingTop: 0.5,
            paddingBottom: 0.5,
          }}
        >
          <Link  underline="hover" href={`/properties/${id}/messages`} sx={{display: "flex",}}>
              <ListItemAvatar>
                <Avatar variant="square" alt={title} src={preview} />
              </ListItemAvatar>
              <ListItemText primary={title} />
          </Link>
          <Divider sx={{width:"100%"}}/>
        </ListItem>
    );
  }
}
