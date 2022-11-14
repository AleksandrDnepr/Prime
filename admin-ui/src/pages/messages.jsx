import React, { Component } from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { flexbox } from "@mui/system";
import Stack from "@mui/material/Stack";
import { withRouter } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from '@mui/material';



class Messages extends Component {

  state={
    messages:null
  }

  componentDidMount() {
    const { property_id } = this.props.match.params;

    fetch(`/api/properties/${property_id}/messages`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ messages: data.messages });
      })
      .catch(() => this.setState({ error: "Something went wrong" }))
  }
  render() {
    const messages = [
      {
        id: 1,
        text: "This is some first msg",
        name: "Alex",
        email: "alex@gmail.com",
        propId: "A0001",
      },
      {
        id: 2,
        text: "This is some second msg",
        name: "Alen",
        email: "alex@gmail.com",
        propId: "A0002",
      },
      {
        id: 3,
        text: "This is some third msg",
        name: "Aleg",
        email: "alex@gmail.com",
        propId: "A0003",
      }
    ];

if(messages.length===0){
  return "There are no messages"
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
          label="Hello, Adam Conover!"
          variant="outlined"
          color="primary"
        />

        <Button variant="outlined" size="small" href="#">
          {"Sign out"}
        </Button>
      </Stack>

      <Breadcrumbs separator=">" sx={{ ml: 2, mb: 2 }} aria-label="breadcrumb">
        <Link underline="hover" href="/properties">
          Properties
        </Link>
        <Typography>Property short description</Typography>
      </Breadcrumbs>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          ml: 2,
        }}
      >
        {messages.map((message) => (
          <>
            <ListItem key={message.id} alignItems="flex-start">
              <Typography>Meassage from {message.name} ({message.email}) about id {message.propId} :</Typography>
              <ListItemText secondary={message.text} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Box>
  );
  }
}

export default withRouter(Messages);



