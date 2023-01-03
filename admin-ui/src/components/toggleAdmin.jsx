import { Component } from "react";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { ListItemButton, List } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import { Properties } from "../pages/properties.jsx";
import { Agents } from "../pages/agents.jsx";

export class ToggleAdmin extends Component {
  render() {
    const { title, link } = this.props;
    return (
      <List sx={{ display: "flex" }}>
        {title.split(" ").map((value) => (
          <ListItemButton
            key={value}
            component="a"
            to={link + value.toLowerCase()}
            sx={{
              maxWidth: "120px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Breadcrumps
              title={value}
              breadcrumbs={[]}
              lastBreadcrumbs="true"
            />
          </ListItemButton>
        ))}
        <Switch>
          <Route path="/admin/agents">
            {" "}
            <Agents user={this.props.user} />
          </Route>
          <Route path="/admin/properties">
            {" "}
            <Properties user={this.props.user} />
          </Route>
        </Switch>
      </List>
    );
  }
}
