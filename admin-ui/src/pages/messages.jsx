import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { flexbox } from "@mui/system";
import Stack from "@mui/material/Stack";
import { withRouter } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

class Messages extends Component {
  state = {
    messages: null,
    agent: null,
  };

  async componentDidMount() {
    const { property_id } = this.props.match.params;

    await fetch(`/api/properties/${property_id}/messages`)
      .then((res) => res.json())
      .then((data) => this.setState({ messages: data }))
      .catch(() => this.setState({ error: "Something went wrong" }));
  }
  render() {
    const { messages, agent } = this.state;

    if (!messages) {
      return null;
    }

    if (messages.length === 0) {
      return "There are no messages by the now";
    }

    return (
      <Box
        component="div"
        sx={{
          display: flexbox,
          width: `calc(100vw)`,
          backgroundColor: "#b8bde8ae",
          lineHeight: 30,
        }}
      >
        <Stack direction="row" spacing={1} sx={{ p: 1 }}>
          <Chip
            sx={{ p: 2, m: 2 }}
            label={`Hello, ${agent}!`}
            variant="outlined"
            color="primary"
          />

          <Button variant="outlined" size="small" href="#">
            {"Sign out"}
          </Button>
        </Stack>

        <Breadcrumbs
          separator=">"
          sx={{ ml: 2, mb: 2 }}
          aria-label="breadcrumb"
        >
          <Link underline="hover" href="/properties">
            Properties
          </Link>
          <Typography>Property short description</Typography>
        </Breadcrumbs>

        <List
          sx={{
            width: "100%",
            maxWidth: "70%",
            bgcolor: "background.paper",
            ml: 2,
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
                  ml:2
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

export default withRouter(Messages);
