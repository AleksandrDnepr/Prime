import { Component } from "react";

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
    const { agents } = this.state;

    return (
      <ul>
        {agents.map((agent) => (
          <li>{agent.name}</li>
        ))}
      </ul>
    );
  }
}
