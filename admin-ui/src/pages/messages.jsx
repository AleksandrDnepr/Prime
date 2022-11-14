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
import { Breadcrumbs, Link, Typography } from '@mui/material';



export class Messages extends Component {
  render() {
    const messages = [
      { id: 1, text: "This is some first msg" },
      { id: 2, text: "This is some second msg" },
      { id: 3, text: "This is some third msg" }
    ];

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

        <Breadcrumbs 
        separator='>'
        sx={{ml:2, mb:2}}
        aria-label="breadcrumb">
          <Link href="/properties">Properties</Link>
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
                <ListItemText primary={message.text} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Box>
    );
  }
}



