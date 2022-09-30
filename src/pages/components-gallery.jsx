import { Component } from "react";

import Pagination from "../components/pagination/pagination";

import Footer from "../components/footer/footer";
import {Description} from "../components/description/description";

import { Subtitle } from "../components/subtitle/subtitle";


import ViewModeToggle from "../components/ViewModeToggle/ViewModeToggle"

import PropertyCard from "../components/propertyCard/propertyCard";

import PropertyDetails from "../components/propertyDetails/propertyDetails";

export default class ComponentsGallery extends Component {
  render() {
    return (
      <div>

        <ViewModeToggle mode="grid" onClick={mode => console.log(`View mode changed to ${mode}`)}/>

        <Pagination
          pages={15}
          page={4}
          onChange={(page) => console.log(`Page changed to ${page}`)}
        />

        <PropertyCard
          mode="list"
          picture="./Photo.png"
          deal="For Sale"
          type="apartment"
          price="2 850 000 $"
          title="Dream Apartment for Young Family"
          location={['Pasadena', 'California']}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed arcu lectus. Praesent eget turpis vehicula, tempor libero sodales, lobortis erat. Etiam nulla odio, imperdiet sed tellus at, rhoncus commodo diam…"
          details={{ area: 1320, bedrooms: 2, bathrooms: 2 }}
        />

        <Footer />

        <Description>Verona at Parkbridge II by DR Horton. Conveniently located in Natomas Sacramento. These 2020 build open, bright, and ready-to-move-in home is available for you. It features a unique floor plan with a 1932 sq.ft/4 bedroom/3 fall bath/Loft/2 story property. Room available downstairs for guests or in-laws. With lots of upgrades from floors to kitchen cabinets and black flash, you are sure to find The Home of your Dreams! These exterior designs are called Prairie at Verona. Homeowners will enjoy close by schools, shopping, entertainment, restaurant, and recreational opportunities close by as well as the charm of Downtown Sacramento. Nearby freeway access to Interstate 5 and Hwy 80, and be within close proximity to Placer County and the Bay Area. Great for First Time Buyers and investors. Must see and available to show.</Description>

        <Subtitle>Floor plans</Subtitle>

        <PropertyDetails details={{ area: 1320, bedrooms: 2, bathrooms: 2 }} />

    </div>)
  }
}
