import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { HeaderAdmin } from "../components/header.jsx";
import MessageList from "../components/messageList";
import Background from "./background.jpg";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { Error } from "../components/error.jsx";

class Messages extends Component {
  state = {
    messages: null,
    agent: null,
  };

  componentDidMount() {
    const { property_id } = this.props.match.params;

    fetch(`/api/properties/${property_id}/messages`)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            this.setState({ messages: data });
          });
        } else {
          this.setState({
            error: `Messages property with id ${property_id} is forbidden for ${this.props.user.name}`,
          });
        }
      })
      .catch(() => this.setState({ error: "Something went wrong" }));

    fetch(`/api/properties/${property_id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ title: data.property.title }));
  }
  render() {
    const { messages, error } = this.state;

    const breadcrumbs = [{ name: "Properties", link: "/properties" }];

    if (error) {
      return <Error errorTitle={"Error 403"}>{error}</Error>;
    }

    if (!messages) {
      return null;
    }

    if (messages.length === 0) {
      return <Error>{"There are no messages for you by the now"}</Error>;
    }

    return (
      <Box
        component="div"
        sx={{
          width: "calc(100vw)",
          height: "calc(100vh)",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          lineHeight: 30,
          padding: 4,
        }}
      >
        <HeaderAdmin user={this.props.user} />

        <Breadcrumps
          title={this.state.title}
          breadcrumbs={breadcrumbs}
          lastBreadcrumbs="true"
        />

        <MessageList messages={this.state.messages} />
      </Box>
    );
  }
}

export default withRouter(Messages);
