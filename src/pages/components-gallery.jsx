import { Component } from "react";

import Pagination from "../components/pagination/pagination";

import Footer from "../components/footer/footer";


import PropertyCard from "../components/propertyCard/propertyCard";

import AmenityList from "../components/amenitylist/amenitylist";

import PropertyDetails from "../components/propertyDetails/propertyDetails";


import Title from "../components/title/title";

import Header from "../components/header/header";

import ViewModeToggle from "../components/ViewModeToggle/ViewModeToggle";

import Description from "../components/description/description";

import Subtitle from "../components/subtitle/subtitle";

import AgentCard from "../components/agentCard/agentCard";

import FloorPlans from "../components/floorPlans/floorPlans";

import Gallery from "../components/Gallery/Gallery";

import { Link } from "react-router-dom";

import PropertyList from "../components/propertyList/propertyList";

export default class ComponentsGallery extends Component {
  render() {
    return (
      <div>

        <Link to="/">Properties</Link>

        <Header title="Properties" />

        <ViewModeToggle mode="grid" onClick={mode => console.log(`View mode changed to ${mode}`)}/>

        <Gallery pictGalery={["https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImZ5bDE1emd3YTdmYzEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.YAMeK2W-sw2n0PRoaYZUWnjgb3-li1hDdEhZxR1TB2Q/image;s=1280x1024;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijlpb3FxOHdscDg4ODEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.nx5hjgihxP4j40cKX2U0r0eai6DcbDEuZNNzr6EQ5Bw/image;s=1280x1024;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InVtNTAxZDVrZXNiMDMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.UNDsJPxwGoTRS5uAQPQJDD9jdvu7RfRG-f_rkK7rx6k/image;s=1280x1024;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InEwdnpwempjM3R5YjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.ZZSYlUKNTJ3BSuvKe52tb19EDzYwHGL-a6Gu8QTnz7U/image;s=1280x1024;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InNtMG9oamd2ZGllNjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.8dNfmMw1opWxzknWxScMhnzQwjwTySxwl5OOACcHJ0Y/image;s=1280x1024;q=80"]}/>

        <Pagination
          pages={15}
          page={4}
          onChange={(page) => console.log(`Page changed to ${page}`)}
        />

        <PropertyCard
          mode="grid"
          picture="https://storage01.tea.ru/medialibrary/2d0/2d0f6ed220d03e626e10a9d5712a4c89/92cce96f3a2c1e7e00e5f3e00f31a65f.jpg"
          link="some link"
          deal="sale"
          type="townhouse"
          price={2850000}
          title="Dream Apartment for Young Family"
          location={['Pasadena', 'California']}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed arcu lectus. Praesent eget turpis vehicula, tempor libero sodales, lobortis erat. Etiam nulla odio, imperdiet sed tellus at, rhoncus commodo diam…"
          details={{ area: 1320, bedrooms: 2, bathrooms: 2 }}
        />

        <Footer />

        <Description>Verona at Parkbridge II by DR Horton. Conveniently located in Natomas Sacramento. These 2020 build open, bright, and ready-to-move-in home is available for you. It features a unique floor plan with a 1932 sq.ft/4 bedroom/3 fall bath/Loft/2 story property. Room available downstairs for guests or in-laws. With lots of upgrades from floors to kitchen cabinets and black flash, you are sure to find The Home of your Dreams! These exterior designs are called Prairie at Verona. Homeowners will enjoy close by schools, shopping, entertainment, restaurant, and recreational opportunities close by as well as the charm of Downtown Sacramento. Nearby freeway access to Interstate 5 and Hwy 80, and be within close proximity to Placer County and the Bay Area. Great for First Time Buyers and investors. Must see and available to show.</Description>

        <AmenityList amenities={[
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

        <Subtitle>Floor plans</Subtitle>

        <Features />

        </div>
    )
    }
}