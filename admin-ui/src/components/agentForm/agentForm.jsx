import { Box, FormGroup, InputLabel, Button, TextField } from "@mui/material";

import React, { Component } from "react";

export default class AgentForm extends Component {
  state = {
    name: !this.props.form ? "" : this.props.form.name,
    email: !this.props.form ? "" : this.props.email,
    location: !this.props.location ? "" : this.props.location,
    phone: !this.props.phone ? "" : this.props.phone,
    photo: !this.props.photo ? "" : this.props.photo,
    btnName: "Create",
  };

  componentDidMount() {
    if (
      this.props.btnName !== this.state.btnName &&
      this.props.btnName !== undefined
    ) {
      this.setState({
        btnName: this.props.btnName,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  handleChange =
    (name) =>
    ({ target: { value } }) => {
      this.setState({
        ...this.state,
        [name]: value,
      });
    };

  render() {
    const { name, email, location, phone, photo } = this.state;

    const labelStyle = {
      width: "70px",
      margin: "5px 10px 5px",
    };

    const boxStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    const textFieldStyle = {
      backgroundColor: "#f7faf8",
      margin: "10px",
      borderRadius: "4px",
    };

    const btnStyle = {
      backgroundColor: "none",
      margin: "10px",
      textTransform: "none",
      fontSize: "16px",
      justifyContent: "",
    };

    return (
      <form>
        <FormGroup sx={{ backgroundColor: "#e1e6ed", maxWidth: "700px" }}>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Name</InputLabel>
            <TextField
              sx={textFieldStyle}
              htmlFor="my-input"
              color="primary"
              value={name}
              onChange={this.handleChange("name")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Email</InputLabel>
            <TextField
              sx={textFieldStyle}
              htmlFor="my-input-email"
              color="primary"
              value={email}
              onChange={this.handleChange("email")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Location</InputLabel>
            <TextField
              sx={textFieldStyle}
              htmlFor="my-input-email"
              color="primary"
              value={location}
              onChange={this.handleChange("location")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Phone</InputLabel>
            <TextField
              sx={textFieldStyle}
              htmlFor="my-input-phone"
              color="primary"
              value={phone}
              onChange={this.handleChange("phone")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Photo</InputLabel>
            <TextField
              sx={textFieldStyle}
              htmlFor="my-input-photo"
              color="primary"
              value={photo}
              onChange={this.handleChange("photo")}
            ></TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "0px 100px 0px 100px",
            }}
          >
            <Button sx={btnStyle}>Cancel</Button>
            <Button sx={btnStyle} onClick={this.handleSubmit}>
              {this.state.btnName}
            </Button>
          </Box>
        </FormGroup>
      </form>
    );
  }
}
