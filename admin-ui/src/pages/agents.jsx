import { Component } from "react";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { AgentList } from "../components/agentList.jsx";
import { AuthError } from "../components/authError.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { ButtonAdd } from "../components/buttonAdd.jsx";
import { Loading } from "../components/loading.jsx";
import { ModalWindow } from "../components/modalWindow";
export class Agents extends Component {
  state = {
    agents: [],
    isLoading: true,
    isModalOpen: false,
  };

  componentDidMount() {
    fetch(`/api/agents`)
      .then((data) => data.json())
      .then((data) => this.setState({ agents: data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  addAgent() {
    this.setState({ isModalOpen: true });
  }

  render() {
    const { agents, error, isLoading, isModalOpen } = this.state;
    const { user } = this.props;
    const content = isLoading ? <Loading /> : <AgentList agents={agents} />;

    if (isModalOpen) {
      return <ModalWindow />;
    }

    if (error) {
      return <AuthError error={error} />;
    }

    return (
      <FullScreenPage user={user}>
        <Breadcrumps title="Agents" breadcrumbs={[]} lastBreadcrumbs="true" />

        {content}

        <ButtonAdd path={"/admin/properties"}>+ Add new agent</ButtonAdd>
      </FullScreenPage>
    );
  }
}
