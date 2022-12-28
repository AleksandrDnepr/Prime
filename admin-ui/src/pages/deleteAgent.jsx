import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { Component } from "react";
import { ModalWindow } from "../components/modalWindow";
import { withRouter } from "react-router-dom";
import { Box } from "@mui/system";
import { DeleteAgentSelect } from "../components/deleteAgentSelect";

class DeleteAgent extends Component {
  state = {
    selectedAgent: "",
  };

  selectAgent(agentId) {
    this.setState({ selectedAgent: agentId });
  }

  close() {
    this.props.history.push("/agents");
  }

  delete() {
    const agentIdToDelete = this.getAgentIdToDelete();
    const { selectedAgent } = this.state;
    console.log({ selectedAgent, agentIdToDelete });
    this.close();
  }

  getAgentIdToDelete() {
    return parseInt(this.props.match.params.agent_id);
  }

  render() {
    const isOpened = this.props.match.path === "/agents/:agent_id/delete";
    const { agents } = this.props;
    const { selectedAgent } = this.state;
    const agentIdToDelete = this.getAgentIdToDelete();
    const filteredAgents = agents.filter(
      (agent) => agent.id !== agentIdToDelete
    );

    return (
      <ModalWindow open={isOpened}>
        <Box sx={{ marginBottom: "20px" }}>
          <p>Are you sure?</p>
          <p>Transfer all agent's properties to:</p>
        </Box>

        <DeleteAgentSelect
          agents={filteredAgents}
          value={selectedAgent}
          onChange={(event) => this.selectAgent(event.target.value)}
        />
        <Box sx={{ margin: "20px auto" }}>
          <Button onClick={() => this.close()}>Cancel</Button>
          <Button onClick={() => this.delete()} disabled={!selectedAgent}>
            Delete
          </Button>
        </Box>
      </ModalWindow>
    );
  }
}

export default withRouter(DeleteAgent);
