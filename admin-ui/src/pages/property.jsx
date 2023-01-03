import { Component } from "react";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { TabsBlock } from "../components/tabsBlock.jsx";
import { Switch, Route } from "react-router-dom";
import Messages from "./messages.jsx";

export class PropertyPage extends Component {
  render() {
    const { user } = this.props;

    return (
      <FullScreenPage user={user} withToggler={false}>
        <TabsBlock />
        <Switch>
          <Route path="/properties/:property_id/images">images</Route>
          <Route path="/properties/:property_id/floor_plans">floor_plans</Route>
          <Route path="/properties/:property_id/features">features</Route>
          <Route path="/properties/:property_id/amenities">amenities</Route>
          <Route path="/properties/:property_id/messages">
            <Messages user={user} />
          </Route>
        </Switch>
      </FullScreenPage>
    );
  }
}
