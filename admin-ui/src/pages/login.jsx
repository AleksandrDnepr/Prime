import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Background from './background.jpg'

export class Login extends Component {

  render() {
    return <Box component="div" sx={{
      width: `calc(100vw)`,
      height: `calc(100vh)`,
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        lineHeight: 30
       }}>
    
    <Button variant="contained" size="lg" onClick={() => console.log("redirect to google form")}>Sign in with Google</Button>
    </Box>
  }
}

