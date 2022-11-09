import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/login";
import { HashRouter, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <HashRouter basename="/admin">
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    );
  }
}

function main() {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<App />);
}

main();
