import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import data from "../data.json";

import HeaderMain from "../components/header/header";
import Title from "../components/title/title.jsx";
import Gallery from "../components/Gallery/Gallery";
import Description from "../components/description/description.jsx";
import FloorPlans from "../components/floorPlans/floorPlans.jsx";
import AmenityList from "../components/amenitylist/amenitylist.jsx";
import Features from "../components/features/features.jsx";
import AgentCard from "../components/agentCard/agentCard.jsx";
import Footer from "../components/footer/footer.jsx";



class Property extends Component {
  getAgentByID(id, agents){
    return agents.find((agent) => {
      return agent.id === id;
    });
  }

  getFlatByID(id, flats){
    return flats.find((item) => {
      return item.id === id;
    });
  }

  render() {
    const {apartaments, agents_info} = data;
    const { property_id } = this.props.match.params;
    const flat = this.getFlatByID(property_id, apartaments);

    if (!flat) {
      this.props.history.push("/page_not_found");
      return;
    }
    const atachedAgent = this.getAgentByID(flat.attached_agents_id, agents_info);
    const {name, photo, location, tel, email} = atachedAgent;

    return (
      <>
        <HeaderMain title={flat.title}/>

        <Title 
            name={flat.title}
            location={flat.location}
            type={flat.type}
            details={flat.details}
            id={flat.id} />

        {flat.images.galery.length === 0 ? 
          null : 
          <Gallery 
          pictGalery={flat.images.galery}/>}
        
        <Description>{flat.description}</Description>

        {flat.plans.length === 0 ? 
          null : 
          <FloorPlans plans={flat.plans}/>}

        <AmenityList 
        amenities={flat.amenities} />
        
        <Features />
        
        <AgentCard
                  name={name}
                  photoUrl={photo} 
                  location={location}
                  phone={tel}
                  email={email}
                />

        <Footer />
      </>
    );
  }
}

export default withRouter(Property);
