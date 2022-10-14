import React, { Component } from "react";

import DropDown from "../dropDown/DropDown";

import Input from "../input/input";

import "./propertyFilter.css"

class PropertyFilter extends Component {
  state = {
    type: "",
    minArea: "",
    maxArea: "",
    status: "",
    bedrooms: "1",
    bathrooms: "1",
    location: "",
    minPrice: "",
    maxPrice: "",
    minYear: ""
  };

  changeFilterParam(name, value) {
    this.setState({[name]: value}) 
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
const { values, options, onSubmit } = this.props;

    return <form className="propertyFilter">
              <DropDown name="type" placeholder="Type" options={options.type}/>
              <DropDown name="status" placeholder="Status"/>
              <DropDown name="minArea" placeholder="Min. Area"/>
              <DropDown name="maxArea" placeholder="Max. Area"/>
              <Input type="text" value={2} name="bedrooms" placeholder="Bedrooms" onChange={(name, value) => this.changeFilterParam(name, value)} />
              <Input type="number" value={3} name="bathrooms" placeholder="Bathrooms" onChange={(name, value) => this.changeFilterParam(name, value)} />
              <DropDown name="minPrice" placeholder="Min. Price"/>
              <DropDown name="maxPrice" placeholder="Max. Price"/>
              <DropDown name="location" placeholder="Location"/>
              <Input type="number" value={5} name="minYear" placeholder="Min. Year Built" onChange={(name, value) => this.changeFilterParam(name, value)} /> 
              <button type="submit" onSubmit={(e) => this.handleSubmit(e)}>Search</button>
          </form>;
  }
}

export default PropertyFilter;
