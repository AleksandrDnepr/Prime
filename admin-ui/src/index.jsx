import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/login";
import Messages from "./pages/messages";
import { Properties } from "./pages/properties";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Agents } from "./pages/agents.jsx";

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <CssBaseline />
        <BrowserRouter basename="/admin">
          <Switch>
            <Route path="/properties/:property_id/messages">
              <Messages user={this.props.user} />
            </Route>
            <Route path="/agents">
              <Agents user={this.props.user} />
            </Route>
            <Route path="/properties">
              <Properties user={this.props.user} />
            </Route>
            <Route path="/">
              <Login user={this.props.user} />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

async function main() {
  const user = await fetch("/api/auth/status").then((res) => res.json());

  ReactDOM.createRoot(document.getElementById("root")).render(
    <App user={user} />
  );
}

main();
