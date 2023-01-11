import React, { Component } from "react";
import { Typography } from "@mui/material";
import { ModalWindow } from "../components/modalWindow.jsx";
import { withRouter } from "react-router-dom";
import AgentForm from "../components/agentForm/agentForm.jsx";

export class CreateAgent extends Component {
  close() {
    this.props.history.push("/agents");
  }
  render() {
    const isOpened = this.props.match.path === "/agents/create";
    return (
      <ModalWindow open={isOpened}>
        <Typography variant="h6" gutterBottom>
          Fill the form to create a new agent:
        </Typography>
        <AgentForm
          onClose={() => this.close()}
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </ModalWindow>
    );
  }
}

export default withRouter(CreateAgent);
