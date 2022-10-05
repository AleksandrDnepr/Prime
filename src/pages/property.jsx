import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { flats } from "./index.jsx";

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
  render() {
    const { property_id } = this.props.match.params;
    const flat = flats.find((item) => {
      return item.id === property_id;
    });
    if (!flat) {
      this.props.history.push("/page_not_found");
      return;
    }
    return (
      <>
        {/* <Link to="/">Index</Link>

        <div>flat.id = {flat.id}</div> */}

        <HeaderMain title={"name of appartament"}/>

        <Title 
            name="Verona at Parkbridge II by DR Horton"
            location={['Natomas', 'Sacramento']}
            type="Townhouse"
            details={{ area: 1320, bedrooms: 2, bathrooms: 2 }}
            mode="list"
            area={1932}
            bedrooms={4}
            bathrooms={3}
            id="A003N" />

        <Gallery 
        pictGalery={[
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImZ5bDE1emd3YTdmYzEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.YAMeK2W-sw2n0PRoaYZUWnjgb3-li1hDdEhZxR1TB2Q/image;s=1280x1024;q=80", 
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijlpb3FxOHdscDg4ODEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.nx5hjgihxP4j40cKX2U0r0eai6DcbDEuZNNzr6EQ5Bw/image;s=1280x1024;q=80", 
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InVtNTAxZDVrZXNiMDMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.UNDsJPxwGoTRS5uAQPQJDD9jdvu7RfRG-f_rkK7rx6k/image;s=1280x1024;q=80", 
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InEwdnpwempjM3R5YjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.ZZSYlUKNTJ3BSuvKe52tb19EDzYwHGL-a6Gu8QTnz7U/image;s=1280x1024;q=80", 
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InNtMG9oamd2ZGllNjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.8dNfmMw1opWxzknWxScMhnzQwjwTySxwl5OOACcHJ0Y/image;s=1280x1024;q=80"
          ]}/>
        
        <Description>Verona at Parkbridge II by DR Horton. Conveniently located in Natomas Sacramento. These 2020 build open, bright, and ready-to-move-in home is available for you. It features a unique floor plan with a 1932 sq.ft/4 bedroom/3 fall bath/Loft/2 story property. Room available downstairs for guests or in-laws. With lots of upgrades from floors to kitchen cabinets and black flash, you are sure to find The Home of your Dreams! These exterior designs are called Prairie at Verona. Homeowners will enjoy close by schools, shopping, entertainment, restaurant, and recreational opportunities close by as well as the charm of Downtown Sacramento. Nearby freeway access to Interstate 5 and Hwy 80, and be within close proximity to Placer County and the Bay Area. Great for First Time Buyers and investors. Must see and available to show.</Description>

        <FloorPlans
        plans={[
          { 'name': '1st Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImRvemFibzBqYW5yODMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.5U2_HsvFpwvAxKlQynbIvdlIAVRjtfeFeVLZtTBbbbE/image;s=1280x1024;q=80' },
          { 'name': '2nd Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjAwZHo3aWdncDBiNjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.enUos-_HR4KDlcfZxopB41nCvx7J72C5Gn4Ddl84YJA/image;s=1280x1024;q=80' },
          { 'name': '3rd Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InRoYXBvenM1dzV2OC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.Fl5THtQLJTo8UDfmyogPRID4Dr-E7rtYZ_3DWaVZfv8/image;s=1280x1024;q=80' }, 
          { 'name': '4th Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InMxcHRsYmE4MDR2bC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.oFZGjsBdqSk5DnHPuTA6dJXPdmCuWcEXj3Evdn1NnL0/image;s=1280x1024;q=80' },
          { 'name': '5th Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InFqcmx4MGExMXUzdC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.NYOxTv8S2_7malQnjQ7TFDDjITV-drK9ajYe4EXfSM4/image;s=1280x1024;q=80' },
        ]}/>

        <AmenityList 
        amenities={[
                    { isAvailable: true, title: "Air Conditioning" },
                    { isAvailable: false, title: "Alarm Clock" },
                    { isAvailable: true, title: "Balcony" },
                    { isAvailable: false, title: "Clothes Dryer" },
                    { isAvailable: false, title: "Coffee Maker" },
                    { isAvailable: true, title: "Deck / Patio" },
                    { isAvailable: false, title: "Dishes & Utensils" },
                    { isAvailable: true, title: "Dishwasher" },
                    { isAvailable: true, title: "Fireplace" },
                    { isAvailable: true, title: "Freezer" },
                    { isAvailable: true, title: "Garage" },
                    { isAvailable: true, title: "Heating" },
                    { isAvailable: true, title: "Ice Maker" },
                    { isAvailable: false, title: "Internet" },
                    { isAvailable: true, title: "Microwave" },
                    { isAvailable: true, title: "Outdoor Grill" },
                    { isAvailable: true, title: "Oven" },
                    { isAvailable: false, title: "Parking On Street" },
                    { isAvailable: true, title: "Refrigerator" },
                    { isAvailable: false, title: "Satellite / Cable TV" },
                    { isAvailable: true, title: "Security System" },
                    { isAvailable: false, title: "Sofa Bed" },
                    { isAvailable: true, title: "Stove" },
                    { isAvailable: false, title: "Telephone" },
                    { isAvailable: false, title: "Toaster" },
                    { isAvailable: true, title: "Washing Machine" },
                    { isAvailable: false, title: "Water Cooler" },
                  ]} />
        
        <Features />

        <AgentCard
                  name={"Adam Conover"}
                  photoUrl={"https://www.hji.co.uk/wp-content/efs/2018/09/Hairdressing-Agent-square.jpg"} 
                  location={"Los Angeles, California"}
                  phone={"+0 123-456-7890"}
                  email={"adam@example.com"}
                />

        <Footer />
      </>
    );
  }
}

export default withRouter(Property);
