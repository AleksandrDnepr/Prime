import React, { Component } from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
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
  };

  handleChange(name, { target: { value } }) {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  }

  handleSubmit() {
    console.log(this.state.values);
    const { onSubmit, onClose } = this.props;
    onSubmit(this.state.values);
    onClose();
  }

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

    const { buttonName, onClose } = this.props;

    console.log(this.state);

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
        <TextField
          label="State"
          value={locationState}
          onChange={(event) => this.handleChange("locationState", event)}
        />
        <FormControl>
          <FormLabel>Deal</FormLabel>
          <RadioGroup
            row
            value={deal}
            sx={{ justifyContent: "center" }}
            onChange={(event) => this.handleChange("deal", event)}
          >
            <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
            <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
          </RadioGroup>
        </FormControl>
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
          inputProps={{ min: 0 }}
          value={price}
          onChange={(event) => this.handleChange("price", event)}
        />
        <TextField
          label="Area"
          type="number"
          inputProps={{ min: 0 }}
          value={area}
          onChange={(event) => this.handleChange("area", event)}
        />
        <TextField
          label="Bedroom"
          type="number"
          inputProps={{ min: 0 }}
          value={bedroom}
          onChange={(event) => this.handleChange("bedroom", event)}
        />
        <TextField
          label="Bathroom"
          type="number"
          inputProps={{ min: 0 }}
          value={bathroom}
          onChange={(event) => this.handleChange("bathroom", event)}
        />
        <TextField
          label="Year"
          type="number"
          inputProps={{ min: 0 }}
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
          <Button onClick={onClose} sx={{ width: "80px" }}>
            Cancel
          </Button>
          <Button onClick={() => this.handleSubmit()} sx={{ width: "80px" }}>
            {buttonName || "Create"}
          </Button>
        </Stack>
      </Stack>
    );
  }
}
