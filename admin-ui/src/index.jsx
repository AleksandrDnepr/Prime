import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/login";
import { Properties } from "./pages/properties";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter basename="/admin">
          <Switch>
            <Route path="/properties" component={Properties} />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

function main() {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<App />);
}

main();
