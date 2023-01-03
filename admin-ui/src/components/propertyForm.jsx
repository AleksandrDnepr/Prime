import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  TextField,
  Stack,
  InputLabel,
  Button,
} from "@mui/material";

export class PropertyForm extends Component {
  state = {
    values: this.props.defaultValues || {
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
    },
    btnName: "Create",
    isOpened: true,
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

  handleChange(name, { target: { value } }) {
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  close() {}

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    const { values } = this.state;
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
    } = values;

    return (
      <Stack sx={{ width: "600px", margin: "auto" }} spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={(event) => this.handleChange("title", event)}
        />
        <TextField
          label="ID"
          value={id}
          onChange={(event) => this.handleChange("id", event)}
        />
        <TextField
          label="City"
          value={locationCity}
          onChange={(event) => this.handleChange("locationCity", event)}
        />
        <FormControl>
          <InputLabel>State</InputLabel>
          <Select
            id="locationState"
            value={locationState}
            label="locationState"
            onChange={(event) => this.handleChange("locationState", event)}
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
            onChange={(event) => this.handleChange("type", event)}
          >
            <MenuItem value="Townhouse">Townhouse</MenuItem>
            <MenuItem value="Apartment">Apartment</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(event) => this.handleChange("price", event)}
        />
        <TextField
          label="Area"
          type="number"
          value={area}
          onChange={(event) => this.handleChange("area", event)}
        />
        <TextField
          label="Bedroom"
          type="number"
          value={bedroom}
          onChange={(event) => this.handleChange("bedroom", event)}
        />
        <TextField
          label="Bathroom"
          type="number"
          value={bathroom}
          onChange={(event) => this.handleChange("bathroom", event)}
        />
        <TextField
          type="date"
          value={year}
          onChange={(event) => this.handleChange("year", event)}
        />
        <TextField
          label="Decscription"
          value={description}
          onChange={(event) => this.handleChange("description", event)}
        />
        <Stack
          sx={{ margin: "20px auto", justifyContent: "center" }}
          direction="row"
          spacing={2}
        >
          <Button onClick={() => this.close()} sx={{ width: "80px" }}>
            Cancel
          </Button>
          <Button onClick={() => this.handleSubmit()} sx={{ width: "80px" }}>
            Create
          </Button>
        </Stack>
      </Stack>
    );
  }
}
