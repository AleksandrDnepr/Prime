import { Component } from "react";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { AgentList } from "../components/agentList.jsx";
import { AuthError } from "../components/authError.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { Button } from "@mui/material";

export class Agents extends Component {
  state = {
    agents: [],
  };

  componentDidMount() {
    fetch(`/api/agents`)
      .then((data) => data.json())
      .then((data) => this.setState({ agents: data }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { agents, error } = this.state;

    const { user } = this.props;

    if (error) {
      return <AuthError error={error} />;
    }

    return (
      <FullScreenPage user={user}>
        <Breadcrumps title="Agents" breadcrumbs={[]} lastBreadcrumbs="true" />

        <AgentList agents={agents} />

        <Button>Add new agent</Button>
      </FullScreenPage>
    );
  }
}
