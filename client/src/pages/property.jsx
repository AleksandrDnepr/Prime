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
import {ContactForm} from "../components/contactForm/contactForm.jsx"


class Property extends Component {

  async sendMail(info) {
    await  fetch('api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((info) => {console.log(info);})
      .catch((err) => {console.log(err.message);})
  }

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
            name={name}
            photoUrl={photo}
            location={location}
            phone={tel}
            email={email}
            status="default"
          />
          <ContactForm 
            onSubmit={ info => this.sendMail(info) }
            />
        </Page>
      </>
    );
  }
}

export default withRouter(Property);


