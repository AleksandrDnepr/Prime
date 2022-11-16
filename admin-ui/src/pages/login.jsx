import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Background from './background.jpg'

export class Login extends Component {

  render() {
    if (this.props.user.email) {
      return <Redirect to="/properties" />;
    }

    return <Box component="div" sx={{
      width: `calc(100vw)`,
      height: `calc(100vh)`,
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        lineHeight: 30
       }}>
    
      <Button variant="contained" size="lg">
        <a href="/api/auth">Sign in with Google</a>
      </Button>
    </Box>
  }
}

