import { Component } from "react";
import { withRouter } from "react-router-dom";
import MessageList from "../components/messageList";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { Error } from "../components/error.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";

class Messages extends Component {
  state = {
    messages: [],
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
      .catch(() => this.setState({ error: "Something went wrong" }));

    fetch(`/api/properties/${property_id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ title: data.property.title }));
  }

  render() {
    const { messages, error, title } = this.state;
    const { user } = this.props;

    const breadcrumbs = [{ name: "Properties", link: "/properties" }];

    const result = error ? (
      <Error errorTitle={"Error 403"}>{error}</Error>
    ) : (
      <MessageList messages={messages} />
    );

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
