import React, { Component } from "react";
import {
  OutlinedInput,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  TextField,
  Stack,
  InputLabel,
  Button
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
      <Stack sx={{ maxWidth: "1000px", margin: "auto" }} spacing={2}>
        <TextField label="Title" autoFocus />
        <TextField label="ID"/>
        <TextField label="City"/>
        <FormControl>
          <InputLabel>State</InputLabel>
          <Select
            id="locationState"
            value={locationState}
            label="locationState"
            onChange={this.handleChange}
          >
            <MenuItem value={10}>California</MenuItem>
            <MenuItem value={20}>Florida</MenuItem>
          </Select>
        </FormControl>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Rent"
          />
          <FormControlLabel control={<Checkbox />} label="Sale" />
        </FormGroup>
        <FormControl>
        <InputLabel>Type</InputLabel>
        <Select
          id="type"
          value={type}
          label="Type"
          onChange={this.handleChange}
        >
          <MenuItem value={10}>Townhouse</MenuItem>
          <MenuItem value={20}>Apartment</MenuItem>
        </Select>
        </FormControl>
        <TextField label="Price" type="number" />
        <TextField label="Area" type="number" />
        <TextField label="Bedroom" type="number" />
        <TextField label="Bathroom" type="number" />
        <TextField label="Year" type="date" />
        <TextField label="Decscription" />
        <Stack sx={{ margin: "20px auto", justifyContent: "center", }} direction="row" spacing={2}>
          <Button onClick={() => this.edit()} sx={{width: "80px"}}>Edit</Button>
          <Button onClick={() => this.create()} sx={{width: "80px"}}>Create</Button>
        </Stack>
      </Stack>
    );
  }
}
