import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typography } from "@mui/material";
import { ModalWindow } from "../components/modalWindow.jsx";
import { PropertyForm } from "../components/propertyForm";

export class CreateProperty extends Component {
  close() {
    this.props.history.push("/properties");
  }

  createNewProperty(values) {
    console.log(this.props.user);
    console.log(values);
  }

  render() {
    const isOpened = this.props.match.path === "/properties/create";

    return (
      <ModalWindow open={isOpened}>
        <Typography variant="h6" gutterBottom>
          Fill the form to create new property:
        </Typography>
        <PropertyForm
          onSubmit={(values) => this.createNewProperty(values)}
          onClose={() => this.close()}
        />
      </ModalWindow>
    );
  }
}

export default withRouter(CreateProperty);
