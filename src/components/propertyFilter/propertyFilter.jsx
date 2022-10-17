import React, { Component } from "react";

import Input from "../input/input";

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

  render() {
    return <form>
           <Input type="text" value={2} name="bedrooms" placeholder="Bedrooms" onChange={(name, value) => this.changeFilterParam(name, value)} />
           <Input type="number" value={3} name="bathrooms" placeholder="Bathrooms" onChange={(name, value) => this.changeFilterParam(name, value)} />
           <Input type="number" value={5} name="minYear" placeholder="Min. Year Built" onChange={(name, value) => this.changeFilterParam(name, value)} /> 
          </form>;
  }
}

export default PropertyFilter;
