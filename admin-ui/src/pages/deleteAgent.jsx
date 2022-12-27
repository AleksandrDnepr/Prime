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
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Agents</InputLabel>
          <Select
            labelId="select"
            id="select"
            value={selectedAgent}
            label="Agents"
            onChange={(event) => this.selectAgent(event.target.value)}
          >
            {filteredAgents.map((agent) => (
              <MenuItem value={agent.id} key={agent.id}>
                {agent.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
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
