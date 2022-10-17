import React, { Component } from "react";

import Button from "../button/button";

import DropDown from "../dropDown/DropDown";

import Input from "../input/input";

import Subtitle from "../subtitle/subtitle";

import "./propertyFilter.css";

class PropertyFilter extends Component {
  state = {
    type: this.props.values.type,
    minArea: this.props.values.minArea,
    maxArea: this.props.values.maxArea,
    deal: this.props.values.deal,
    bedrooms: this.props.values.bedrooms,
    bathrooms: this.props.values.bathrooms,
    location: this.props.values.location,
    minPrice: this.props.values.minPrice,
    maxPrice: this.props.values.maxPrice,
    minYear: this.props.values.minYear,
    prevValues: this.props.values
  };

  changeFilterParam(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const copyState = JSON.parse(JSON.stringify(this.state))
    delete copyState.prevValues;
    for(const key in copyState) {
      if(copyState[key] !== this.state.prevValues[key]) {
        this.setState({prevValues: copyState})
        this.props.onSubmit(copyState)
        return;
      }
    }
  }

  typeOptions() {
    const { type } = this.props.options;
    return type.map((type) => {
      switch (type) {
        case "single":
          return { value: type, label: "Single-family" };
        case "townhouse":
          return { value: type, label: "Townhouse" };
        case "apartment":
          return { value: type, label: "Apartment" };
        default:
          return;
      }
    });
  }

  statusOptions() {
    const { deal } = this.props.options;
    return deal.map((deal) => {
      switch (deal) {
        case "sale":
          return { value: deal, label: "Sale" };
        case "rent":
          return { value: deal, label: "Rent" };
        default:
          return;
      }
    });
  }

  minAreaOptions() {
    const { minArea } = this.props.options;
    return minArea.map((minArea) => {
      switch (minArea) {
        case "10":
          return { value: minArea, label: "10" };
        case "20":
          return { value: minArea, label: "20" };
        case "30":
          return { value: minArea, label: "30" };
        default:
          return;
      }
    });
  }

  maxAreaOptions() {
    const { maxArea } = this.props.options;
    return maxArea.map((maxArea) => {
      switch (maxArea) {
        case "1000":
          return { value: maxArea, label: "1000" };
        case "2000":
          return { value: maxArea, label: "2000" };
        case "3000":
          return { value: maxArea, label: "3000" };
        default:
          return;
      }
    });
  }

  minPriceOptions() {
    const { minPrice } = this.props.options;
    return minPrice.map((minPrice) => {
      switch (minPrice) {
        case "5":
          return { value: minPrice, label: "5" };
        case "10":
          return { value: minPrice, label: "10" };
        case "20":
          return { value: minPrice, label: "20" };
        default:
          return;
      }
    });
  }

  maxPriceOptions() {
    const { maxPrice } = this.props.options;
    return maxPrice.map((maxPrice) => {
      switch (maxPrice) {
        case "5000":
          return { value: maxPrice, label: "5000" };
        case "6000":
          return { value: maxPrice, label: "6000" };
        case "7000":
          return { value: maxPrice, label: "7000" };
        default:
          return;
      }
    });
  }

  locationOptions() {
    const { location } = this.props.options;
    return location.map((location) => {
      switch (location) {
        case "CA":
          return { value: location, label: location };
        case "FL":
          return { value: location, label: location };
        case "UA":
          return { value: location, label: location };
        default:
          return;
      }
    });
  }

  render() {
    const { type, deal, bedrooms, bathrooms, minArea, maxArea, minPrice, maxPrice, location, minYear } = this.state;

    return (
      <form className="property-filter">
        <Subtitle>PROPERTY SEARCH</Subtitle>
        <ul className="property-filter__list">
          <li>
            <DropDown
              name="type"
              placeholder="Type"
              value={type}
              options={this.typeOptions()}
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li>
            <DropDown
              name="deal"
              placeholder="Status"
              value={deal}
              options={this.statusOptions()}
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li className="property-filter__min-max-property">
            <label className="property-filter__mini-drop-down">
              <DropDown
                name="minArea"
                placeholder="Min. Area"
                value={minArea}
                options={this.minAreaOptions()}
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
            <label className="property-filter__mini-drop-down">
              <DropDown
                name="maxArea"
                placeholder="Max. Area"
                value={maxArea}
                options={this.maxAreaOptions()}
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
          </li> 
          <li>
            <Input
              type="number"
              size="large"
              value={bedrooms}
              name="bedrooms"
              placeholder="Bedrooms"
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li>
            <Input
              type="number"
              size="large"
              value={bathrooms}
              name="bathrooms"
              placeholder="Bathrooms"
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li className="property-filter__min-max-property">
            <label className="property-filter__mini-drop-down">
              <DropDown
                name="minPrice"
                placeholder="Min. Price"
                value={minPrice}
                options={this.minPriceOptions()}
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
            <label className="property-filter__mini-drop-down">
              <DropDown
                name="maxPrice"
                placeholder="Max. Price"
                value={maxPrice}
                options={this.maxPriceOptions()}
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
          </li>
          <li>
            <DropDown
              name="location"
              placeholder="Location"
              value={location}
              options={this.locationOptions()}
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li>
            <Input
              type="number"
              size="large"
              value={minYear}
              name="minYear"
              placeholder="Min. Year Built"
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li className="property-filter__search">
            <Button size="l" rounding="both" clickEvent={() => this.handleSubmit()}>
               Search
            </Button>
          </li>
        </ul>
      </form>
    );
  }
}


export default PropertyFilter;
