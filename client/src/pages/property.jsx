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
  
  getPropertyByID(id, properties) {
    return properties.find((item) => {
      return item.id === id;
    });
  }
  
  render() {
    const { apartaments } = data;
    const { property_id } = this.props.match.params;
    const property = this.getPropertyByID(property_id, apartaments);
    const agentId = property.attached_agents_id;
    
    if (!property) {
      this.props.history.push("/page_not_found");
      return;
    }
    
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
            agentId={agentId}
            status="default"
          />
        </Page>
      </>
    );
  }
}

export default withRouter(Property);


