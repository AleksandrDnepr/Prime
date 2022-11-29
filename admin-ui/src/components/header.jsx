import { Component } from "react";
import { Button, Chip, Stack } from "@mui/material";
import { Box } from "@mui/system";

export class HeaderAdmin extends Component {
  state = {
    messages: null,
    agent: null,
  };

  render() {
    return (
      <Box>
        <Stack direction="row" spacing={1} sx={{ p: 1, marginBottom: 2 }}>
          <Chip
            sx={{ p: 2 }}
            label={`Hello, ${this.props.user.name}!`}
            variant="outlined"
            color="primary"
          />
          <Button
            component="a"
            href="/api/auth/logout"
            variant="contained"
            size="small"
          >
            Sign out
          </Button>
        </Stack>
      </Box>
    );
  }
}
