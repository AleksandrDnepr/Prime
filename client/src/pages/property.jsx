import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import data from "../data.json";
import { Title } from "../components/title/title.jsx";
import { Gallery } from "../components/Gallery/Gallery.jsx";
import { Description } from "../components/description/description.jsx";
import { FloorPlans } from "../components/floorPlans/floorPlans.jsx";
import { AmenityList } from "../components/amenitylist/amenitylist.jsx";
import { Features } from "../components/features/features.jsx";
import { AgentCard } from "../components/agentCard/agentCard.jsx";
import { Page } from "../components/page/page.jsx";
import { GoHomeButton } from "../components/goHomeButton/GoHomeButton";
import { Loading } from "../components/loading/loading";
import { ErrorMessage } from "../components/errorMessage/errorMessage";
import { Redirect } from 'react-router-dom';

class Property extends Component {
  state = {
    property: null,
    isLoading: true,
  };

  componentDidMount() {
    const { property_id } = this.props.match.params;

    fetch(`/api/properties/${property_id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ property: data.property });
      })
      .catch(() => this.setState({ error: "Something went wrong" }))
      .finally(() => this.setState({ isLoading: false }));
  }
  
  render() {
    const { property, isLoading, error } = this.state;
    
    if (isLoading) {
      return <Loading />;
    }
    
    if (error) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }
    
    if (!property) {
      return <Redirect to="/page_not_found" />;
    }

    const agentId = property.attached_agents_id;
    
    return (
      <>
        <Page title={property.title}>
          <GoHomeButton />

          <Title
            name={property.title}
            location={property.location}
            details={property.details}
            id={property.id}
            type={property.type}
            price={property.price}
          />

          <Gallery pictGalery={property.images.galery} />

          <Description>{property.description}</Description>

          <FloorPlans plans={property.plans} />

          <AmenityList amenities={property.amenities} />

          <Features features={property.features} />

          <AgentCard
            agentId={agentId}
            status="default"
          />
        </Page>
      </>
    );
  }
}

export default withRouter(Property);


