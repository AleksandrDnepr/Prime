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
    const { propertyId, title, image } = this.props;

    return (
        <ListItem
          alignItems="center"
          sx={{
            flexDirection:"column",
            alignItems: "flex-start",
            paddingTop: `4px`,
            paddingBottom: `4px`,
          }}
        >
          <Link  underline="hover" href={`/properties/${propertyId}/messages`} sx={{display: "flex",}}>
              <ListItemAvatar>
                <Avatar variant="square" alt={title} src={image} />
              </ListItemAvatar>
              <ListItemText primary={title} />
          </Link>
          <Divider sx={{width:"100%"}}/>
        </ListItem>
    );
  }
}
