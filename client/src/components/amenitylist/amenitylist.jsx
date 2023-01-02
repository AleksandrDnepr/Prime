import React, { Component } from "react";
import { AmenityListItem } from "../amenitylistitem/amenitylistitem.jsx";
import { Subtitle } from "../subtitle/subtitle.jsx";

import "./amenitylist.css";

export class AmenityList extends Component {
  state = {
    
        "1":  {id: 1, "isAvailable": false, "title": "Air Conditioning" },
        "2":  {id: 2, "isAvailable": false,  "title": "Alarm Clock" },
        "3":  {id: 3, "isAvailable": false, "title": "Balcony" },
        "4":  {id: 4, "isAvailable": false,  "title": "Clothes Dryer" },
        "5":  {id: 5, "isAvailable": false,  "title": "Coffee Maker" },
        "6":  {id: 6, "isAvailable": false, "title": "Deck / Patio" },
        "7":  {id: 7, "isAvailable": false,  "title": "Dishes & Utensils" },
        "8":  {id: 8, "isAvailable": false, "title": "Dishwasher" },
        "9":  {id: 9, "isAvailable": false, "title": "Fireplace" },
        "10": {id: 10,  "isAvailable": false, "title": "Freezer" },
        "11": {id: 11,  "isAvailable": false, "title": "Garage" },
        "12": {id: 12,  "isAvailable": false, "title": "Heating" },
        "13": {id: 13,  "isAvailable": false, "title": "Ice Maker" },
        "14": {id: 14,  "isAvailable": false,  "title": "Internet" },
        "15": {id: 15,  "isAvailable": false, "title": "Microwave" },
        "16": {id: 16,  "isAvailable": false, "title": "Outdoor Grill" },
        "17": {id: 17,  "isAvailable": false, "title": "Oven" },
        "18": {id: 18,  "isAvailable": false,  "title": "Parking On Street" },
        "19": {id: 19,  "isAvailable": false, "title": "Refrigerator" },
        "20": {id: 20,  "isAvailable": false,  "title": "Satellite / Cable TV" },
        "21": {id: 21,  "isAvailable": false, "title": "Security System" },
        "22": {id: 22,  "isAvailable": false,  "title": "Sofa Bed" },
        "23": {id: 23,  "isAvailable": false, "title": "Stove" },
        "24": {id: 24,  "isAvailable": false,  "title": "Telephone" },
        "25": {id: 25,  "isAvailable": false,  "title": "Toaster" },
        "26": {id: 26,  "isAvailable": false, "title": "Washing Machine" },
        "27": {id: 27,  "isAvailable": false,  "title": "Water Cooler" }
  }

  componentDidMount(){
    const { amenities } = this.props;
      amenities.forEach(amenity => {
        if (amenity.id === this.state[amenity.id].id) {
          this.setState(prevState => ({
            [amenity.id]: {                   
                ...prevState[amenity.id],    
                isAvailable: true,       
            }
        })
      )}
    })
  }

  render() {
    const amenities = Object.values(JSON.parse(JSON.stringify(this.state)))

    return (
      <section className="amenity amenity__section">
        <Subtitle>Amenities</Subtitle>
        <ul className="amenity__list">
          {amenities.map(item => (
            <AmenityListItem item={item} key={item.title} />
          ))}
        </ul>
      </section>
    );
  }
}
