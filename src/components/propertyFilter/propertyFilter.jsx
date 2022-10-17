import React, { Component } from "react";

class Input extends Component {
  state = {
    startValue: this.props.value,

    currentValue: this.props.value,
  };

  changeValue(e) {
    const { type } = this.props;

    let value = e.target.value;

    if (type === "number") {
      value = Number(value);
    }

    this.setState({ currentValue: value });
  }

  handleFocus(e) {
    const { type } = this.props;

    let value = e.target.value;

    if (type === "number") {
      value = Number(value);
    }

    this.setState({ startValue: value });
  }

  handleBlur = () => {
    const { startValue, currentValue } = this.state;

    if (currentValue !== startValue) {
      this.props.onChange(this.props.name, currentValue);
    }
  };

  render() {
    const { type, name, placeholder } = this.props;

    const { currentValue } = this.state;

    return (
      <input
        type={type}
        name={name}
        value={currentValue}
        placeholder={placeholder}
        onChange={(e) => this.changeValue(e)}
        onFocus={(e) => this.handleFocus(e)}
        onBlur={this.handleBlur}
        autoComplete="off"
        className="input"
      />
    );
  }
}

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
    minYear: "",
    search: "",
  };

  changeFilterParam(name, value) {
console.log(name, value);
    this.setState({[name]: value}) 
  }

  render() {
    return <form>
           <Input type="number" value={2} name="bedrooms" onChange={(name, value) => this.changeFilterParam(name, value)} />
           <Input type="number" value={3} name="bathrooms" onChange={(name, value) => this.changeFilterParam(name, value)} />
           <Input type="number" value={5} name="minYear" onChange={(name, value) => this.changeFilterParam(name, value)} /> 
          </form>;
  }
}

export default PropertyFilter;
