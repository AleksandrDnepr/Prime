import { Component } from "react";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { AgentList } from "../components/agentList.jsx";
import { AuthError } from "../components/authError.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { ButtonAdd } from "../components/buttonAdd.jsx";
import { Loading } from "../components/loading.jsx";
import { ModalWindow } from "../components/modalWindow";
import DeleteAgent from "./deleteAgent.jsx";
import { Switch, Route } from "react-router-dom";
export class Agents extends Component {
  state = {
    agents: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchAgents();
  }

  fetchAgents() {
    this.setState({ isLoading: true });

    fetch(`/api/agents`)
      .then((data) => data.json())
      .then((data) => this.setState({ agents: data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { agents, error, isLoading } = this.state;
    const { user } = this.props;
    const content = isLoading ? <Loading /> : <AgentList agents={agents} />;

    if (error) {
      return <AuthError error={error} />;
    }

    return (
      <FullScreenPage user={user}>
        <Breadcrumps title="Agents" breadcrumbs={[]} lastBreadcrumbs="true" />

        {content}
        <Switch>
          <Route path="/agents/:agent_id/delete">
            <DeleteAgent agents={agents} onDelete={() => this.fetchAgents()} />
          </Route>
        </Switch>

        <ButtonAdd path={"/properties"}>+ Add new agent</ButtonAdd>
      </FullScreenPage>
    );
  }
}
