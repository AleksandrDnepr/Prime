import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Box } from "@mui/system";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

class MessageList extends Component {

  render() {
    const { messages } = this.props;

    return (
      <Box>
        <List
          sx={{
            width: "100%",
            maxWidth: "70%",
            bgcolor: "#aceafa",
            ml: 2,
            '&:empty::before': {
              content: '"No messages found 😅"',
              display: 'block',
            }
          }}
        >
          {messages.map(({id, name, email, text, prop_id}) => (
            <ListItem
              sx={{
                borderBottom: 1,
                borderColor: "lightgrey",
              }}
              key={id}
              alignItems="flex-start"
            >
              <Typography>
                from {name} ({email}) about id{" "}
                {prop_id} :
              </Typography>
              <ListItemText
                sx={{
                  ml: 2,
                }}
                secondary={text}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}

export default withRouter(MessageList);
