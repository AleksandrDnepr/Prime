import { Component } from "react";
import { Box } from "@mui/material";
import { HeaderAdmin } from "./header/header";
import { Footer } from "./footer";

export class FullScreenPage extends Component {
  render() {
    const { user, children } = this.props;
    return (
      <Box>
        <HeaderAdmin name={user.name}></HeaderAdmin>
        <Box sx={{ p: 2 }}>{children}</Box>
        <Footer />
      </Box>
    );
  }
}
