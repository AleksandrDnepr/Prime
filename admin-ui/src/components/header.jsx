import { Button, Chip, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

export default class HeaderAdmin extends Component {
  state = {
    messages: null,
    agent: null,
  };

  render() {
    return (
      <Box>
        <Stack direction="row" spacing={1} sx={{ p: 1 }}>
          <Chip
            sx={{ p: 2, m: 2 }}
            label={`Hello, ${this.props.user.name}!`}
            variant="outlined"
            color="primary"
          />
          <Button
            component="a"
            href="/api/auth/logout"
            variant="outlined"
            size="small"
          >
            Sign out
          </Button>
        </Stack>
      </Box>
    );
  }
}
