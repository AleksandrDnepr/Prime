import React, { Component } from 'react'
import Select from 'react-select'
import "./dropDown.css"





export default class DropDown extends Component {
    state={
        currentProperty: "",
    };

    
  render() {
    
    const getValue = ()=> {
        return this.state.currentProperty? options.find(c => c.value===this.state.currentProperty):""
    }

    const changeValue=(selected)=>{
return this.setState({currentProperty:selected.value})
    }

    const options=[
        { 'value': 'single', 'label': 'Single-family' },
        { 'value': 'house', 'label': 'Townhouse' },
        { 'value': 'apt', 'label': 'Apartment' },
      ]

    return (
      <div className='dropdown-input'>
        <Select 
        placeholder="Type"
        onChange={changeValue}
        value={getValue()} 
        options={options}/>
      </div>

    )
  }
}
