import { Component } from "react";
import { withRouter } from "react-router-dom";
import MessageList from "../components/messageList";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { Error } from "../components/error.jsx";
import { Loading } from "../components/loading.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";

class Messages extends Component {
  state = {
    messages: [],
    agent: null,
    isLoading: true,
  };

  componentDidMount() {
    const { property_id } = this.props.match.params;
    const { user } = this.props;

    fetch(`/api/properties/${property_id}/messages`)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            this.setState({ messages: data });
          });
        } else {
          this.setState({
            error: `Messages property with id ${property_id} is forbidden for ${user.name}`,
          });
        }
      })
      .catch(() => this.setState({ error: "Something went wrong" }))
      .finally(() => this.setState({ isLoading: false }));

    fetch(`/api/properties/${property_id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ title: data.property.title }));
  }

  render() {
    const { messages, error, isLoading } = this.state;
    const { user } = this.props;

    const breadcrumbs = [{ "name": "Properties", "link": "/properties" }];
    const content = isLoading ? <Loading /> :  <MessageList messages={this.state.messages} />;   
    const result = error ? 
      <Error errorTitle={"Error 403"}>{error}</Error> : 
      content

    

    return (
      <FullScreenPage user={user}>
        <Breadcrumps
          title={title}
          breadcrumbs={breadcrumbs}
          lastBreadcrumbs="true"
        />
{result}

      </FullScreenPage>
    );
  }
}

export default withRouter(Messages);
