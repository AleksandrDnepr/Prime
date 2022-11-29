import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Background from './background.jpg'
import { Link } from "@mui/material";

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
        <Link underline="hover" href={`/api/auth`} color="#ffffff">
          Sign in with Google
        </Link>
      </Button>
    </Box>
  }
}

