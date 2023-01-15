import React, { Component } from "react";
import { TextField, Stack, Button } from "@mui/material";
import { AuthError } from "../components/authError";

export class PlanForm extends Component {
  state = {
    values: this.props.defaultValues || {
      name: "",
      url: "",
    },
    prevValues: {},
  };

  handleChange(name, value) {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  }

  handleSubmit() {
    const { onSubmit, onClose } = this.props;
    const { name, url } = this.state.values;
    if (name === "" || url === "") {
      return <AuthError error={"FILL FORM"} />;
    }

    const copyValues = JSON.parse(JSON.stringify(this.state.values));
    delete copyValues.prevValues;

    for (const key in copyValues) {
      if (copyValues[key] !== this.state.prevValues[key]) {
        this.setState({ prevValues: copyValues });
        onSubmit(copyValues);
        onClose();
        return;
      }
    }
  }

  render() {
    const { values } = this.state;
    const { name, url } = values;
    const isError = (value) => {
      return value === "";
    };

    const { buttonName, onClose } = this.props;

    return (
      <Stack sx={{ width: "400px", margin: "auto" }} spacing={2}>
        <TextField
          label="Plan name"
          error={isError(name)}
          required
          value={name}
          onChange={(event) => this.handleChange("name", event.target.value)}
        />
        <TextField
          label="Plan image link"
          error={isError(url)}
          required
          value={url}
          onChange={(event) => this.handleChange("url", event.target.value)}
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
