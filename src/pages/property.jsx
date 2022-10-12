import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import data from "../data.json";
import {Title} from "../components/title/title.jsx";
import {Gallery} from "../components/Gallery/Gallery.jsx";
import {Description} from "../components/description/description.jsx";
import {FloorPlans} from "../components/floorPlans/floorPlans.jsx";
import {AmenityList} from "../components/amenitylist/amenitylist.jsx";
import {Features} from "../components/features/features.jsx";
import {AgentCard} from "../components/agentCard/agentCard.jsx";
import {Page} from "../components/page/page.jsx";



class Property extends Component {
  getAgentByID(id, agents) {
    return agents.find((agent) => {
      return agent.id === id;
    });
  }

  getPropertyByID(id, properties) {
    return properties.find((item) => {
      return item.id === id;
    });
  }

  render() {
    const { apartaments, agents_info } = data;
    const { property_id } = this.props.match.params;
    const property = this.getPropertyByID(property_id, apartaments);


    if (!property) {
      this.props.history.push("/page_not_found");
      return;
    }
    const atachedAgent = this.getAgentByID(property.attached_agents_id, agents_info);
    const { name, photo, location, tel, email } = atachedAgent;

    return (
      <>
        <Page title={property.title} withSidebar={false}>
          <Title
            name={property.title}
            location={property.location}            
            details={property.details}
            id={property.id}
            price={property.price} />

          {property.images.galery.length === 0 ?
            null :
            <Gallery
              pictGalery={property.images.galery} />}

          <Description>{property.description}</Description>

          {property.plans.length === 0 ?
            null :
            <FloorPlans plans={property.plans} />}

          <AmenityList
            amenities={property.amenities} />

          <Features features={property.features}/>

          <AgentCard
            name={name}
            photoUrl={photo}
            location={location}
            phone={tel}
            email={email}
          />
        </Page>
      </>
    );
  }
}

export default withRouter(Property);
