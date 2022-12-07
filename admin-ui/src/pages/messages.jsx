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
    messages: [],
  };

  componentDidMount() {
    const { property_id } = this.props.match.params;
    const { user } = this.props;

    fetch(`/api/properties/${property_id}/messages`)
      .then(res => { 
        if (res.ok) {
          res.json().then((data) => {
            this.setState({ messages: data });
          });
        } else {
          this.setState({
            error: `Messages property with id ${property_id} is forbidden for ${this.props.user.name}`,
          });
        }
<<<<<<< HEAD
      })
      .catch(() => this.setState({ error: "Something went wrong" }));

      fetch(`/api/properties/${property_id}`)
        .then(res => res.json())
        .then(data => this.setState({title: data.property.title}))
        
=======
      })      
      .catch(() => this.setState({ error: "Something went wrong" }))

    fetch(`/api/properties/${property_id}`)
      .then(res => res.json())
      .then(data => this.setState({title: data.property.title}))
>>>>>>> c14171e (finished improving massage error display)
  }

  render() {
    const { messages, error, title } = this.state;
    const { user } = this.props;

<<<<<<< HEAD
    const breadcrumbs = [{ name: "Properties", link: "/properties" }];

    if (error) {
      return <Error errorTitle={"Error 403"}>{error}</Error>;
    }
=======
    const breadcrumbs = [{ "name": "Properties", "link": "/properties" }];
    
    const result = error ? 
      <Error errorTitle={"Error 403"}>{error}</Error> : 
      <MessageList messages={messages} />
>>>>>>> c14171e (finished improving massage error display)

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
        <HeaderAdmin user={user} />

        <Breadcrumps title={title} breadcrumbs={breadcrumbs} lastBreadcrumbs="true" />

        {result}

      </Box>
    );
  }
}

export default withRouter(Messages);
