import { Component } from "react";
import { HeaderAdmin } from "../components/header.jsx";
import { Breadcrumps } from "../components/breadcrumbs.jsx";

export class Agents extends Component {
  state = {
    agents: [],
  };

  componentDidMount() {
    fetch(`/api/agents`)
      .then((data) => data.json())
      .then((data) => this.setState({ ...data }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { agents, error } = this.state;

    return (
      <ul>
        {agents.map((agent) => (
          <li>{agent.name}</li>
        ))}
      </ul>
    );
  }
}
