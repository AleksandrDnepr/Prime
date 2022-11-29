import { Component } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { withRouter } from "react-router-dom";

class MessageList extends Component {
  state = {
    messages: null,
    agent: null,
  };
  render() {
    const { messages } = this.props;

    return (
      <Box>
        <List
          sx={{
            width: "100%",
            maxWidth: "70%",
            bgcolor: "#aceafa",
          }}
        >
          {messages.map((message) => (
            <ListItem
              sx={{
                borderBottom: 1,
                borderColor: "lightgrey",
              }}
              key={message.id}
              alignItems="flex-start"
            >
              <Typography>
                Message from {message.name} ({message.email}) about id{" "}
                {message.prop_id} :
              </Typography>
              <ListItemText
                sx={{
                  ml: 2,
                }}
                secondary={message.text}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}

export default withRouter(MessageList);
