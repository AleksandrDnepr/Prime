import React, { Component } from "react";
import {
  OutlinedInput,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  TextField, 
  Stack
} from "@mui/material";

export class PropertyForm extends Component {
  state = {
    title: "",
    id: "",
    locationCity: "",
    locationState: "",
    deal: "",
    type: "",
    price: "",
    area: "",
    bedroom: "",
    bathroom: "",
    year: "",
    description: "",
  };
  handleChange() {}

  render() {
    const {
      title,
      id,
      locationCity,
      locationState,
      deal,
      type,
      price,
      area,
      bedroom,
      bathroom,
      year,
      description,
    } = this.state;

    return (
      <Stack sx={{maxWidth: "1000px", margin: "auto"}} spacing={2}>
        <OutlinedInput placeholder="Title">Title</OutlinedInput>
        <OutlinedInput placeholder="Title">ID</OutlinedInput>
        <OutlinedInput placeholder="Title">City</OutlinedInput>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locationState}
          label="State"
          onChange={this.handleChange}
        >
          <MenuItem value={10}>California</MenuItem>
          <MenuItem value={20}>Florida</MenuItem>
        </Select>
        <FormGroup sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Rent"
          />
          <FormControlLabel control={<Checkbox />} label="Sale" />
        </FormGroup>
        <Select
          labelId="Type"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={this.handleChange}
        >
          <MenuItem value={10}>Townhouse</MenuItem>
          <MenuItem value={20}>Apartment</MenuItem>
        </Select>
        <OutlinedInput type="number" placeholder="Price">Price</OutlinedInput>
        <OutlinedInput type="number" placeholder="Area">Area</OutlinedInput>
        <OutlinedInput type="number" placeholder="Bedroom">Bedroom</OutlinedInput>
        <OutlinedInput type="number" placeholder="Bathroom">Bathroom</OutlinedInput>
        <OutlinedInput type="date" placeholder="Year">Year</OutlinedInput>
        <TextField placeholder="Description"></TextField>
      </Stack>
    );
  }
}

