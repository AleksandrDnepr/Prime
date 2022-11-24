import React, { Component } from "react";
import Box from "@mui/material/Box";
import { withRouter } from "react-router-dom";
import HeaderAdmin from "../components/header";
import MessageList from "../components/messageList";
import Background from "./background.jpg";
import Breadcrumps from "../components/breadcrumps";

class Messages extends Component {
  state = {
    messages: null,
    agent: null,
  };

  async componentDidMount() {
    const { property_id } = this.props.match.params;

    await fetch(`/api/properties/${property_id}/messages`)
      .then((res) => res.json())
      .then((data) => this.setState({ messages: data }))
      .catch(() => this.setState({ error: "Something went wrong" }));

      await fetch(`/api/properties/${property_id}`)
        .then((res) => res.json())
        .then((data) => this.setState({title:data.property.title}))
        
  }
  render() {
    const { messages } = this.state;

    if (!messages) {
      return null;
    }

    if (messages.length === 0) {
      return "There are no messages by the now";
    }

    return (
      <Box
        component="div"
        sx={{
          width: `calc(100vw)`,
          height: `calc(100vh)`,
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        <HeaderAdmin user={this.props.user} />

        <Breadcrumps title={this.state.title}/>

        <MessageList messages={this.state.messages} />
      </Box>
    );
  }
}

export default withRouter(Messages);
