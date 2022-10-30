import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import data from "../data.json";
import {Title} from "../components/title/title.jsx";
import {Gallery} from "../components/Gallery/Gallery.jsx";
import {Description} from "../components/description/description.jsx";
import {FloorPlans} from "../components/floorPlans/floorPlans.jsx";
import {AmenityList} from "../components/amenitylist/amenitylist.jsx";
import {Features} from "../components/features/features.jsx";
import {AgentCard} from "../components/agentCard/agentCard.jsx";
import {Page} from "../components/page/page.jsx"
import {GoHomeButton} from "../components/goHomeButton/GoHomeButton";


class Property extends Component {

  async getAgentByID(id) {
    const agent = await fetch(`api/agents/${id}/`)
              .then(res => res.json())
              .then(data => data.agent)
      console.log(agent)        
    return agent;
  }

  getPropertyByID(id, properties) {
    return properties.find((item) => {
      return item.id === id;
    });
  }

  render() {
    const { apartaments } = data;
    const { property_id } = this.props.match.params;
    const property = this.getPropertyByID(property_id, apartaments);


    if (!property) {
      this.props.history.push("/page_not_found");
      return;
    }

    const atachedAgent = this.getAgentByID(property.attached_agents_id);
    // console.log(object);
    const { name, photo, location, tel, email, id } = atachedAgent;
    console.log(atachedAgent);

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
            price={property.price} />

          <Gallery
            pictGalery={property.images.galery} />

          <Description>{property.description}</Description>

          <FloorPlans plans={property.plans} />

          <AmenityList
            amenities={property.amenities} />

          <Features features={property.features}/>

          <AgentCard
            id={id}
            name={name}
            photoUrl={photo}
            location={location}
            phone={tel}
            email={email}
            status="default"
          />
        </Page>
      </>
    );
  }
}

export default withRouter(Property);


