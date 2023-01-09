import { Component } from "react";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import TabsBlock from "../components/tabsBlock.jsx";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Messages from "./messages.jsx";
import { PropertyCard } from "../components/propertyCard.jsx";

const allDetails = [
  "messages",
  "images",
  "floor plans",
  "features",
  "amenities",
];

class PropertyPage extends Component {
  state = {
    property: [],
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
    const { property_id, currentDetailsSlug } = this.props.match.params;
    const { property } = this.state;
    const baseUrl = `/properties/${property_id}`;
    const baseUrlPattern = "/properties/:property_id";

    if (!currentDetailsSlug) {
      return <Redirect to={`${baseUrl}/messages`} />;
    }

    const currentDetails = currentDetailsSlug.replace("_", " ");

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

        <TabsBlock
          baseUrl={baseUrl}
          currentTab={currentDetails}
          tabs={allDetails}
        />

        <Switch>
          <Route path={`${baseUrlPattern}/messages`}>
            <Messages user={user} />
          </Route>
          <Route path={`${baseUrlPattern}/images`}>images</Route>
          <Route path={`${baseUrlPattern}/floor_plans`}>floor_plans</Route>
          <Route path={`${baseUrlPattern}/features`}>features</Route>
          <Route path={`${baseUrlPattern}/amenities`}>amenities</Route>
        </Switch>
      </FullScreenPage>
    );
  }
}

export default withRouter(PropertyPage);
