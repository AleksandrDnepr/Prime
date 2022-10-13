import React, { Component } from 'react'
import Select from 'react-select'
import "./dropDown.css"

export default class DropDown extends Component {
    state = {
        currentProperty: this.props.value
    };

    render() {

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'white' : '#4D4F52',
                padding: 20,
            }),

            dropdownIndicator: (provided) => ({
                ...provided,
                // padding: '3px',
                backgroundColor: 'white',
                borderRadius: '4px'
            }),

            indicatorSeparator: (provided) => ({
                ...provided,
                margin:'3px',
                backgroundColor:'#74777C'
            }),

            control: (provided) => ({
                ...provided,
                border:'1px solid #74777C',
                borderRadius: '4px',
                backgroundColor:'white'
            }),

            clearIndicator: (provided) => ({
                ...provided,
                backgroundColor: '#f2e9e9',
                borderRadius: '50%',
               padding:'3px',
               margin: '8px'
            }),

            singleValue: (provided, state) => {

                return { ...provided };
            }
        }

        const getValue = () => {
            return this.state.currentProperty ? options.find(selected => selected.value === this.state.currentProperty) : ''
        }

        const changeValue = (selected, e) => {
            if (e.action === 'clear') {
                this.setState({ currentProperty: '' })
                this.props.onChange(name, undefined)
            }
            else {
                this.setState({ currentProperty: selected.value })
                this.props.onChange(name, selected.value)
            }
        }

        const { options, placeholder, name } = this.props;

        return <div className='dropdown-input'>
            <Select
                styles={customStyles}
                placeholder={placeholder}
                onChange={changeValue}
                value={getValue()}
                options={options}
                isClearable
                name={name}
            />
        </div>
    }
}
