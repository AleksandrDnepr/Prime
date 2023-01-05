import { Component } from "react";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import TabsBlock from "../components/tabsBlock.jsx";
import { Switch, Route, withRouter } from "react-router-dom";
import Messages from "./messages.jsx";
import { PropertyCard } from "../components/propertyCard.jsx";

class PropertyPage extends Component {
  state = {
    property: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchProperty();
  }

  fetchProperty() {
    const { property_id } = this.props.match.params;

    this.setState({ isLoading: true });

    fetch(`/api/properties/${property_id}`)
      .then((data) => data.json())
      .then((data) => this.setState({ ...data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { user } = this.props;
    const { path } = this.props.match;
    const { property } = this.state;

    return (
      <FullScreenPage user={user} withToggler={false}>
        <PropertyCard
          id={property.prop_id}
          title={property.title}
          city={property.city}
          state={property.state}
          type={property.type}
          area={property.area}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          year={property.year}
          price={property.price}
          deal={property.deal}
          preview={property.preview}
          description={property.description}
        />

        <TabsBlock />
        <Switch>
          {/* <Route index>
            <Messages user={user} />
          </Route> */}
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
