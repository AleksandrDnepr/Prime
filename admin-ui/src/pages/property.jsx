import { Component } from "react";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import TabsBlock from "../components/tabsBlock.jsx";
import { Switch, Route, withRouter } from "react-router-dom";
import Messages from "./messages.jsx";

export class PropertyPage extends Component {
  render() {
    const { user } = this.props;
    const { path } = this.props.match;

    return (
      <FullScreenPage user={user} withToggler={false}>
        <TabsBlock />
        <Switch>
          <Route index>
            <Messages user={user} />
          </Route>
          <Route path={`${path}/messages`}>
            <Messages user={user} />
          </Route>
          <Route path={`${path}/images`}>images</Route>
          <Route path={`${path}/floor_plans`}>floor_plans</Route>
          <Route path={`${path}/features`}>features</Route>
          <Route path={`${path}/amenities`}>amenities</Route>
        </Switch>
      </FullScreenPage>
    );
  }
}

export default withRouter(PropertyPage);
